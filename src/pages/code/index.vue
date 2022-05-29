<template>
  <div class="code-page">
    <Header :title="meta.title" />
    <div class="content">
      <div class="left-view code-area" v-show="isShowDemo">
        <router-view />
      </div>
      <div class="right-desc markdown-area" v-show="isShowReadme">
        <component :is="meta.readme" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$route?.meta || {}
    },
    isShowDemo() {
      return !this.meta.hide?.includes('demo')
    },
    isShowReadme() {
      return !this.meta.hide?.includes('readme')
    }
  }
}
</script>

<style lang="less" scoped>
@import "@/asset/css/variable.less";

.code-page {
  .content {
    display: flex;
    justify-content: center;

    .left-view,
    .right-desc {
      flex: 1;
      min-height: calc(100vh - 100px);
      width: 80%;
      padding: 40px;
      overflow: auto;
      margin: 20px;
      border-radius: 8px;
      max-width: @max-width;
      min-width: @min-width;
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

@media screen and (max-width: @min-width) {
  .code-page {
    .content {
      flex-direction: column-reverse;
      min-height: 100vh;
      .left-view,
      .right-desc {
        width: 100%;
        max-width: none;
        min-width: auto;
        min-height: auto;
        padding: 20px;
        margin: 0;
      }
    }
  }
}
</style>
