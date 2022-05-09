<template>
  <div>
    <div class="top-menu">
      <a href="/">首页</a>
      <div>{{ componentName }}</div>
    </div>
    <div class="left-view">
      <router-view />
    </div>
    <div class="right-desc">
      <component :is="readme" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    componentName() {
      return this.$route?.meta?.name
    },
    readme() {
      return this.$route?.meta?.readme
    }
  }
}
</script>

<style lang="less" scoped>
.top-menu {
  display: flex;
  height: 60px;
  line-height: 60px;
  padding: 0 50px;
  text-align: left;
  border-bottom: 1px solid #d2d2d2;
  & > div {
    margin-left: 20px;
  }
}
.left-view,
.right-desc {
  min-height: calc(100vh - 60px);
  width: 50%;
  float: left;
  padding: 40px;
}
.left-view {
  box-shadow: 0 0 40px #99999940 inset;
}
.right-desc {
  box-shadow: 0 0 40px #99999940 inset;
}
</style>