<template>
  <div class="footer">
    <div class="footer-content">
      <div class="friend-links">
        <a v-for="link in friendLinks" :key="link.url" :href="link.url" class="friend-link" target="_blank">
          {{ link.text }}
        </a> 
      </div>
      <a href="/#/index" class="website-anonce">
        {{ slogan }}  &copy;2022 {{ title }}
      </a>
    </div>
  </div>
</template>

<script>
import { getWebsiteConfig } from '@/lib/util'

export default {
  name: 'Footer',
  data() {
    const { title, slogan } = getWebsiteConfig()

    return {
      title,
      slogan,
      friendLinks: [
        { text: 'xInfoLab Code', url: 'https://github.com/xInfoLabCode' },
        { text: 'Canvas Design', url: 'https://canvas-design.xinfolab.com/views/rotating-starry-sky.html' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "@/asset/css/variable.less";

@footer-color: rgba(0, 0, 0, .5);
@margin: 15px;

.footer {
  display: flex;
  justify-content: center;
  height: 100px;
  margin: 50px 150px 0;
  font-size: .9em;
  border-top: 1px solid #ddd;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    max-width: 1200px;
    min-width: 800px;

    .website-anonce {
      display: inline-block;
      margin-left: @margin;
    }

    .friend-links {
      display: flex;
      justify-content: center;

      a {
        & + a {
          margin-left: @margin;
        }
      }
    }
  }
}

@media screen and (max-width: @min-width) {
  .footer {
    height: 80px;
    font-size: .8em;
    margin: 50px 20px 0;

    &-content {
      min-width: auto;
      max-width: none;
      flex-direction: column;

      & > div {
        height: 20px;
      }

      .friend-links > a {
        color: @footer-color;
      }
      .website-anonce {
        margin-left: 0;
        color: @footer-color;
      }
    }
  }
}
</style>
