<template>
  <div class="header">
    {{title}} <span class="version">{{version}}</span>
  </div>
</template>

<script>
import { getWebsiteConfig } from '@/lib/util'

export default {
  data() {
    const config = getWebsiteConfig()

    return {
      title: config.title,
      version: config.version
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  padding: 0 50px;
  font-size: 20px;
  border-bottom: 1px solid #d2d2d2;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background-color: var(--color-white);
  .version {
    font-size: var(--font-size-s)
  }
}
</style>
