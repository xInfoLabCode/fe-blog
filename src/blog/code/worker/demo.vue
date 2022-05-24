<template>
  <div>
    Worker
  </div>
</template>

<script>
import Vue from 'vue'
import worker from 'vue-worker'

Vue.use(worker)

function test(a, b) {
  console.log(111, a, b)
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
