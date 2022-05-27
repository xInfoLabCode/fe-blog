<template>
  <div class="header">
    <div v-show="isFold" class="header-fold">
      <a href="/" class="header-logo" alt="logo"></a>
      <div class="header-title">{{ title }}</div>
    </div>
    <div class="header-expand">
      <div v-if="!title" class="header-logo"></div>
      <div v-else class="header-title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import { getWebsiteConfig } from '@/lib/util'
const config = getWebsiteConfig()

export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      isFold: false
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
  font-size: 25px;

  &-fold,
  &-expand {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
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

    .header-logo {
      display: inline-block;
      width: 140px;
      height: 50px;
      margin-right: 30px;
      background-image: url('../asset/img/logo.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .header-title {
      color: var(--font-color-dark);
    }
  }

  &-expand {
    height: 400px;
    justify-content: center;

    .header-logo {
      width: 400px;
      height: 200px;
      background-image: url('../asset/img/logo.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .header-title {
      font-size: 60px;
    }
  }
}
</style>
