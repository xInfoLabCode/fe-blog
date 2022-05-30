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
@import "@/asset/css/variable.less";

.markdown-page {
  .body  {
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;

    .content {
      width: 80%;
      max-width: @max-width;
      min-width: @min-width;
      padding: 50px;
    }
  }
}

@media screen and (max-width: @min-width) {
  .markdown-page {
    .body  {
      justify-content: flex-start;
      .content {
        width: 100%;
        max-width: none;
        min-width: auto;
        padding: var(--padding-h5);
      }
    }
  }
}
</style>
