<template>
  <div class="markdown-page">
    <Header :title="title" />
    <div class="body">
      <div class="content markdown-area">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route?.meta?.name
    }
  }
}
</script>

<style lang="less" scoped>
.markdown-page {
  .body  {
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;

    .content {
      width: 80%;
      max-width: 1200px;
      min-width: 800px;
      padding: 50px;
    }
  }
}
</style>
