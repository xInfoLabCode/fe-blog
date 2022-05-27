<template>
  <div class="code-page">
    <Header :title="title" />
    <div class="content">
      <div class="left-view">
        <router-view />
      </div>
      <div class="right-desc markdown-area">
        <component :is="readme" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route?.meta?.name
    },
    readme() {
      return this.$route?.meta?.readme
    }
  }
}
</script>

<style lang="less" scoped>
.code-page {
  .content {
    display: flex;
    .left-view,
    .right-desc {
      min-height: calc(100vh - 100px);
      width: 50%;
      padding: 40px;
      overflow: auto;
      margin: 20px;
      border-radius: 8px;
    }
    .left-view {
      margin-right: 10px;
    }
    .right-desc {
      margin-left: 10px;
      /deep/ body {
        background-color: white !important;
      }
    }
  }
}
</style>
