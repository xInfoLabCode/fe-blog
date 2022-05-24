<template>
  <div class="content-header">
    <a href="/">{{title}}</a>
    <div class="blog-name">{{ blogName }}</div>
  </div>
</template>

<script>
import { getWebsiteConfig } from '@/lib/util'

export default {
  data() {
    return {
      title: getWebsiteConfig().title
    }
  },
  computed: {
    blogName() {
      return this.$route?.meta?.name
    }
  }
}
</script>

<style lang="less" scoped>
.content-header {
  display: flex;
  height: 60px;
  line-height: 60px;
  padding: 0 50px;
  text-align: left;
  font-size: 20px;
  background-color: var(--color-white);
  border-bottom: 1px solid #d2d2d2;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);

  .blog-name {
    margin-left: 20px;
  }
}
</style>
