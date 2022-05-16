<template>
  <div>
    <div class="title">100个经典前端设计案例</div>
    <div class="component-list">
      <div v-for="item in componentList" :key="item.url" class="component-list-item">
        <a :href="item.url" class="component-list-item-title">{{ item.id }} - {{ item.name }}</a>
        <div class="component-list-item-description">{{ item.description }}</div>
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
        ...item?.meta,
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
    padding: 10px 0 20px;

    &-title {
      display: block;
      font-weight: 500;
      line-height: 40px;
    }
    &-description {
      font-size: 13px;
      line-height: 20px;
    }
  }
}
</style>