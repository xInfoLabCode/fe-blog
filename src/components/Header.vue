<template>
  <div class="header">
    <div v-show="isFold" class="header-fold">
      <a href="/" class="header-fold-logo" alt="logo"></a>
      <div class="header-fold-title">{{ title }}</div>
    </div>
    <div class="header-expand">
      <div v-if="!title" class="header-expand-logo"></div>
      <template v-else>
        <a href="/" class="header-expand-logo-icon" alt="logo"></a>
        <div class="header-expand-title">{{ title }}</div>
      </template>
    </div>
  </div>
</template>

<script>
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
      this.scrollHandler()

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
@import "@/asset/css/variable.less";

.header {
  font-size: 25px;

  &-fold,
  &-expand {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    background: var(--theme-color);
  }

  &-fold {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;
    z-index: 100;

    &-title {
      flex: 1;
      color: var(--font-color-dark);
      margin-left: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .header-fold-logo {
    display: inline-block;
    width: 140px;
    height: 50px;
    background-image: url('../asset/img/logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &-expand {
    height: 400px;
    justify-content: center;
    position: relative;

    &-logo {
      width: 400px;
      height: 200px;
      background-image: url('../asset/img/logo.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    &-logo-icon {
      .header-fold-logo;
      position: absolute;
      left: 50px;
      top: 5px;
    }
    &-title {
      font-size: 60px;
      padding: 10px;
    }
  }
}

@media screen and (max-width: @min-width) {
  .header-expand-logo-icon {
    left: 10px !important;
  }
  .header-fold {
    padding: 0 10px !important;
  }
  .header-fold-title {
    margin-left: 10px !important;
  }
}
</style>