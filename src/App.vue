<template>
  <div id="app">
    <a class="fork-me" href="https://github.com/brandom1225/100-classical-fe"></a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
