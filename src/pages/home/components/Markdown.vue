<template>
  <div class="blog-item blog-markdown">
    <a :href="blog.url" class="blog-item-title">{{ blog.name }}</a>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="less">
.blog-item {
  padding: 10px 0 20px;
  &-title {
    line-height: 40px;
    font-size: 16px;
  }
  &-description {
    line-height: 16px;
  }
}
</style>
