<template>
  <div class="header">
    <div v-show="isFold" class="header-fold" :style="{'height': `${foldHeight}px`}">
      <a href="/" class="header-fold-logo" alt="logo"></a>
      <div class="header-fold-title">{{ title }}</div>
    </div>
    <div class="header-expand" :style="{'height': `${expandHeight}px`}">
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
      expandHeight: 350,
      foldHeight: 60,
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
      this.isFold = window.scrollY > this.expandHeight - this.foldHeight
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
    line-height: 100%;
    padding: 0 50px;
    z-index: 100;

    &-title {
      flex: 1;
      margin-left: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: white;
    }

    &-logo {
      display: inline-block;
      width: 140px;
      height: 50px;
      background-image: var(--logo-white);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &-expand {
    justify-content: center;
    position: relative;

    &-title {
      font-size: 60px;
      padding: 10px;
      color: white;
    }

    &-logo {
      width: 380px;
      max-width: 80%;
      height: 200px;
      background-image: var(--logo-white);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      &-icon {
        position: absolute;
        left: 50px;
        top: 5px;
        display: inline-block;
        width: 140px;
        height: 50px;
        background-image: var(--logo-white);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}

@media screen and (max-width: @min-width) {
  .header {
    &-fold {
      padding: 0 10px !important;
      &-title {
        margin-left: 15px;
      }
    }
    &-expand {
      &-title {
        display: -webkit-box;
        font-size: 48px;
        margin-left: 10px !important;
        max-height: 175px;
        overflow: hidden;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      &-logo-icon {
        left: 10px !important;
      }
    }
  }
}
</style>
