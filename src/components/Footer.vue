<template>
  <div class="footer">
    <div class="footer-content">
      <div class="website-anonce">
        To Explre The Virtual - xInfoLab.com
      </div>
      <div class="friend-links">
        <a v-for="link in friendLinks" :key="link.url" :href="link.url" class="friend-link" target="_blank">
          {{ link.text }}
        </a> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      friendLinks: [
        { text: 'RandomFE', url: 'https://github.com/RandomFE' },
        { text: 'Canvas Design', url: 'https://canvas-design.xinfolab.com/views/rotating-starry-sky.html' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.footer {
  display: flex;
  justify-content: center;
  height: 140px;
  margin-top: 50px;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    max-width: 1200px;
    min-width: 800px;
    border-top: 1px solid #ddd;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);

    .website-anonce {
      height: 45px;
    }

    .friend-links {
      display: flex;
      justify-content: center;

      a + a {
        margin-left: 30px;
      }
    }
  }
}
</style>