<template>
  <div class="fe100">
    <Header />
    <div class="content">
      <div class="blog-list">
        <div v-for="blog in list" :key="blog.url" class="blog-list-item">
          <Code v-if="blog.type === 'code'" :blog="blog" />
          <Markdown v-if="blog.type === 'markdown'" :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Code from './components/Code.vue'
import Markdown from './components/Markdown.vue'

import codeRoutes from '@/router/code'
import markdownRoutes from '@/router/markdown'

export default {
  components: {
    Header,
    Code,
    Markdown
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
        type: 'code',
        ...item?.meta,
        url: `/#${item.path}`
      }))

      const markdownList = markdownRoutes.map(item => ({
        type: 'markdown',
        ...item?.meta,
        url: `/#${item.path}`
      }))

      this.list = codeList.concat(markdownList).sort((a, b) => b?.date - a?.date)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  .blog-list {
    max-width: 1200px;
    padding: 50px 0;
  }
}
</style>
