<template>
  <div id="app">
    <a class="fork-me" :href="config.github" target="_blank"></a>
    <router-view />
  </div>
</template>

<script>
import { getWebsiteConfig } from '@/lib/util'

export default {
  name: 'App',
  data() {
    return {
      config: getWebsiteConfig(),
    }
  },
  watch: {
    $route: {
      handler() {
        this.updateMetaInfo()
      }
    }
  },
  methods: {
    updateMetaInfo() {
      const { meta } = this.$route

      this.setTitle(meta.name)
      this.setDescription(meta.description)
      this.setKeywords(meta.keywords)
    },
    setTitle(title = '') {
      let pageTitle = ''

      if (!title) {
        pageTitle = `${this.config.title} - ${this.config.keywords.join(',')}`
      } else {
        pageTitle = `${title} - ${this.config.title}`
      }

      document.querySelector('head>title').innerHTML = pageTitle
    },
    setDescription(desc = '') {
      const pageDescription = desc || this.config.description
      document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription)
    },
    setKeywords(keywords) {
      const pageKeywords = (keywords || this.config.keywords).join(',')
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', pageKeywords)
    }
  }
}
</script>

<style scoped>
.fork-me {
  position: fixed;
  display: block;
  width: 138px;
  height: 138px;
  top: 0;
  right: 0;
  transform: rotate(90deg);
  background: transparent url(./asset/img/fork-sprite.png) 0 0 no-repeat;
  z-index: 100;
}
</style>
