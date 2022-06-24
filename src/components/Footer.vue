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

@footer-color: var(--theme-color);
@font-color: white;
@margin: 15px;

.footer {
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 50px;
  color: @font-color;
  font-size: .9em;
  background-color: @footer-color;
  background-image: var(--linear-gradient);

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
      color: @font-color;
    }

    .friend-links {
      display: flex;
      justify-content: center;

      a {
        color: @font-color;

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

    &-content {
      min-width: auto;
      max-width: none;
      flex-direction: column;

      & > div {
        height: 20px;
      }

      .website-anonce {
        margin-left: 0;
      }
    }
  }
}
</style>
