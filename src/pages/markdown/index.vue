<template>
  <div class="markdown-page">
    <ContentHeader />
    <div class="body">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'

export default {
  components: {
    ContentHeader
  }
}
</script>

<style lang="less" scoped>
.markdown-page {
  .body  {
    display: flex;
    justify-content: center;
    padding: 50px 0 100px;
    .content {
      max-width: 1200px;
    }
  }
}
</style>
