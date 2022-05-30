<template>
  <div class="home-page">
    <Header />
    <div class="content">
      <Timeline :list="list" class="timeline-area" />
    </div>
    <Footer />
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
@import "@/asset/css/variable.less";

.home-page {
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;

    .timeline-area {
      width: 80%;
      max-width: @max-width;
      min-width: @min-width;
      padding: 50px;
      margin: 20px 0 40px;
      background-color: white;
      border-radius: var(--border-radius);
    }
  }

  @media screen and (max-width: @min-width) {
    .content {
      display: block;
      min-height: auto;
      .timeline-area {
        width: 100%;
        max-width: @min-width;
        min-width: auto;
        padding: var(--padding-h5);
      }
    }
  }
}
</style>
