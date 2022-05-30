<template>
  <div class="footer">
    <div class="footer-content">
      <div class="friend-links">
        <a v-for="link in friendLinks" :key="link.url" :href="link.url" class="friend-link" target="_blank">
          {{ link.text }}
        </a> 
      </div>
      <a href="/" class="website-anonce">
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
        { text: 'RandomFE', url: 'https://github.com/RandomFE' },
        { text: 'Canvas Design', url: 'https://canvas-design.xinfolab.com/views/rotating-starry-sky.html' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "@/asset/css/variable.less";

@footer-color: var(--font-color);
@margin: 15px;

.footer {
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 50px;
  color: @footer-color;
  font-size: .9em;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    max-width: 1200px;
    min-width: 800px;
    border-top: 1px solid #eee;

    .website-anonce {
      display: inline-block;
      margin-left: @margin;
    }

    .friend-links {
      display: flex;
      justify-content: center;

      a {
        color: @footer-color;

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
