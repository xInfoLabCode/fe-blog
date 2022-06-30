<template>
  <a class="blog-item blog-code" :href="blog.url" target="blank">
    <div class="blog-item-title">{{ blog.name }} {{ blog.id }}</div>
    <div class="blog-item-description" v-html="blog.description"></div>
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
