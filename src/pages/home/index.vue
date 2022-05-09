<template>
  <div>
    <div class="title">100个经典前端设计案例</div>
    <div class="component-list">
      <div v-for="item in componentList" :key="item.url" class="component-list-item">
        <a :href="item.url">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { componentRoutes } from '@/router/routes' 

export default {
  computed: {
    componentList() {
      return componentRoutes.map(item => ({
        name: item.meta.name,
        url: `/#${item.path}`
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  height: 60px;
  line-height: 60px;
  padding: 0 50px;
  border-bottom: 1px solid #d2d2d2;
}
.component-list {
  padding: 50px;

  &-item {
    height: 40px;
    line-height: 40px;
  }
}
</style>