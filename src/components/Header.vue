<template>
  <div class="header" :class="isFold ? 'header-fold' : 'header-expand'">
    <img class="logo" src="/logo.svg" />
  </div>
</template>

<script>
import { getWebsiteConfig } from '@/lib/util'

export default {
  data() {
    const config = getWebsiteConfig()

    return {
      isFold: false,
      title: config.title,
      version: config.version
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.unInit()
  },
  methods: {
    init() {
      window.addEventListener('scroll', this.scrollHandler)
    },
    unInit() {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    scrollHandler() {
      const [minHeight, maxHeight] = [60, 400]
      if (!this.isFold) {
        if (window.scrollY > maxHeight - minHeight) {
          this.isFold = true

          this.unInit()
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid #d2d2d2;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background-color: white;

  &.header-fold {
    position: sticky;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;

    .logo {
      width: 140px;
    }
  }

  &.header-expand {
    height: 400px;
    justify-content: center;

    .logo {
      width: 400px;
    }
  }
}
</style>
