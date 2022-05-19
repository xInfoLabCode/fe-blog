<template>
  <div class="code-page">
    <ContentHeader />
    <div class="content">
      <div class="left-view">
        <router-view />
      </div>
      <div class="right-desc">
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
      height: calc(100vh - 60px);
      width: 50%;
      padding: 40px;
      overflow: auto;
    }
    .left-view {
      box-shadow: 0 0 40px #99999940 inset;
    }
    .right-desc {
      box-shadow: 0 0 40px #99999940 inset;
    }
  }
}
</style>
