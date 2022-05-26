<template>
  <div class="code-page">
    <ContentHeader />
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
import ContentHeader from '@/components/ContentHeader.vue'

export default {
  components: {
    ContentHeader
  },
  computed: {
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
