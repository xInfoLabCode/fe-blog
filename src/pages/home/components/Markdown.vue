<template>
  <a class="blog-item blog-markdown" :href="blog.url">
    <div class="blog-item-title">{{ blog.name }}</div>
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
