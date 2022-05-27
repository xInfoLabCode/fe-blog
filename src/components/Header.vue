<template>
  <div class="header">
    <div v-show="isFold" class="header-fold">
      <img class="logo" src="/logo.svg" alt="logo" />
    </div>
    <div class="header-expand">
      <img class="logo" src="/logo.svg" alt="logo" />
    </div>
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

      this.isFold = window.scrollY > maxHeight - minHeight
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  font-size: 20px;

  &-fold,
  &-expand {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d2d2d2;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    background-color: white;
  }

  &-fold {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;
    z-index: 100;

    .logo {
      width: 140px;
    }
  }

  &-expand {
    height: 400px;
    justify-content: center;

    .logo {
      width: 400px;
    }
  }
}
</style>
