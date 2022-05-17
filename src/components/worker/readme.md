## Worker多线程

### 原生JS多线程

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
