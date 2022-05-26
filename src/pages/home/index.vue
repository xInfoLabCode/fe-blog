<template>
  <div class="fe100">
    <Header />
    <div class="content">
      <Timeline :list="list" class="timeline-area" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Timeline from './components/Timeline.vue'

import codeRoutes from '@/router/code'
import markdownRoutes from '@/router/markdown'

export default {
  components: {
    Header,
    Timeline
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const codeList = codeRoutes.map(item => ({
        ...item?.meta,
        url: `/#${item.path}`
      }))

      const markdownList = markdownRoutes.map(item => ({
        ...item?.meta,
        url: `/#${item.path}`
      }))

      this.list = [...codeList, ...markdownList].sort((a, b) => b?.date - a?.date)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 1200px;

  .timeline-area {
    width: 80%;
    max-width: 1200px;
    min-width: 800px;
    padding: 50px;
    margin: 20px 0 40px;
    background-color: white;
    border-radius: var(--border-radius);
  }
}
</style>
