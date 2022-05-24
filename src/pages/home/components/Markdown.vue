<template>
  <a class="blog-item blog-markdown" :href="blog.url" target="_blank">
    <span class="blog-item-title">{{ blog.name }}</span>
  </a>
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
