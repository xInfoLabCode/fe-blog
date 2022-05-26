<template>
  <div class="markdown-page">
    <ContentHeader />
    <div class="body">
      <div class="content markdown-area">
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
