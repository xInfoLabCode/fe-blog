<template>
  <div class="content-header">
    <a href="/">首页</a>
    <div class="blog-name">{{ blogName }}</div>
  </div>
</template>

<script>
export default {
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
  border-bottom: 1px solid #d2d2d2;
  font-size: 20px;

  .blog-name {
    margin-left: 20px;
  }
}
</style>
