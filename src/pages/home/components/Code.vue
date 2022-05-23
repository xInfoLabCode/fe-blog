<template>
  <div class="blog-item blog-code">
    <a :href="blog.url" class="blog-item-title">{{ blog.name }} {{ blog.id }}</a>
    <div class="blog-item-description">{{ blog.description }}</div>
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
  }
}
</style>
