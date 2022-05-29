# Worker多线程

## 1. 原生JS多线程

> 页面运行worker，限制了worker.js需要与页面同源。本地js代码可以借助URL.createObjectURL和Data URL的方式规避

### 1.1 URL.createObjectURL
> vue-worker等库一般借助于URL.createObjectURL创建本地js文件的方式规避同源限制.

``` javascript
<script>
  // 1.定义多线程实际运行的函数
  function threadFn(a, b, c) {
    // 可以传递初始化参数，但参数应尽量通过onmessage传递
    console.log('Worker Thread | receive initial args:', a, b, c)

    // worker进程内通过self调用context方法，不能使用this
    self.onmessage = (e) => {
      console.log('Worker Thread | onmessage:', e.data)

      console.log('Worker Thread | postMessage:', e.data)
      self.postMessage(e.data)
    }
  }

  // 2.定义worker创建方法：传入多线程运行函数和初始参数，创建worker
  function createWorker(fn, ...params) {
    // 将多线程函数转字符串
    const fnStr = `(${fn.toString()})(${[...params]})`
    console.warn('Main Thread | thread function string:', fnStr)

    // worker必须使用页面同源的js，此处借助URL.createObjectURL转换
    const blob = new Blob([fnStr])
    const url = URL.createObjectURL(blob)
    // 优化：URL.createObjectURL创建的资源必须手动通过URL.revokeObjectURL释放，否则需要刷新Browser Context时才会被释放

    const worker = new Worker(url)
    return worker
  }

  // 3.实例化worker
  const c = "'c'" // 线程创建传递初始化参数。注意，字符串常量需要两重引号包裹，否则函数转字符串会解析异常。建议通过postMessage传递数据
  let worker = createWorker(threadFn, "'aaa'", c, 111)

  // 4.定义外层worker数据首发
  worker.onmessage = e => {
    console.warn('Main Thread | onmessage:', e.data)

    if (e.data === 'terminate') {
      terminate()
    }
  }

  // 5.向worker发送数据
  console.warn('Main Thread | postMessage:', 'main')
  worker.postMessage('main')

  // 6.注销worker
  function terminate() {
    worker.terminate()
    worker = null
    console.warn('Main Thread | worker has been terminated')
  }

  setTimeout((() => {
    console.warn('Main Thread | postMessage:', 'terminate')
    worker.postMessage('terminate')
  }), 1000)
</script>
```

### 1.2 Data URL
> 除了URL.createObjectURL外，还可以通过Data URL实现。通过Data URL运行的js函数不能省略语句的分号

``` javascript
function threadFn () {
  console.log('worker | init thread');

  self.postMessage('create success');
}

function createWorker(fn) {
  const worker = new Worker(`data:,(${fn.toString()})()`)
  return worker
}

const worker = createWorker(threadFn)
worker.onmessage = e => {
  console.log('main | onmessage', e.data)
}
```

## 2. Vue多线程
``` javascript
<template>
  <div>Worker</div>
</template>

<script>
import Vue from 'vue'
import worker from 'vue-worker'

Vue.use(worker)

function test(a, b) {
  return a + b
}

export default {
  created() {
    this.init()
  },
  methods: {
    init() {
      this.runWorker()
      this.createWorker()
    },
    runWorker() {
      let worker = this.$worker.run(test, [1, 2])

      worker.then(res => {
        console.log(`this.$worker`, res)
      })

      worker = null // destroy worker
    },
    createWorker() {
      const actions = [
        { message: 'f1', func: a => a++ },
        { message: 'f2', func: (a, b) => a + b }
      ]
      let workerList = this.$worker.create(actions)

      workerList.postMessage('f1', [99]).then(res => console.log('f1', res))
      workerList.postMessage('f2', [99, 101]).then(res => console.log('f2', res))

      workerList = null // destroy worker
    },
  }
}
</script>
```
