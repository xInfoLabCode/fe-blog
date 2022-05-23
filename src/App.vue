<template>
  <div id="app">
    <a class="fork-me" :href="github" target="_blank"></a>
    <router-view />
  </div>
</template>

<script>
import config from '@/../package.json'

export default {
  name: 'App',
  data() {
    return {
      github: config.github
    }
  }
}
</script>

<style scoped>
.fork-me {
  display: block;
  width: 138px;
  height: 138px;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(90deg);
  background: transparent url(./asset/img/fork-sprite.png) 0 0 no-repeat;
}
</style>
