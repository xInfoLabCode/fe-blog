<template>
  <div class="content">
    <div class="blog-list">
      <div v-for="item in list" :key="item.url" :class="item.type" class="blog-row wow fadeInLeft">
        <Markdown v-if="item.type==='markdown'" :blog="item" />
        <Code v-else :blog="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Code from './Code.vue'
import Markdown from './Markdown.vue'

export default {
  props: {
    list: Array
  },
  components: {
    Code,
    Markdown
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.initAnimation()
    },
    initAnimation() {
      this.$nextTick(() => {
        const wow = new this.$wow.WOW()
        wow.init()
      })
    }
  }
}
</script>

<style scoped lang="less">
@import "@/asset/css/variable.less";

.content {
  display: flex;
  align-items: stretch;
  position: relative;
  
  .blog-list {
    flex: 1;

    .blog-row {
      display: flex;
      width: 100%;
      margin-bottom: 60px;

      &.markdown {
        justify-content: flex-end;

        /deep/ .blog-item-title {
          &::after {
            right: auto;
            left: -56px;
          }
        }
      }

      .blog-item {
        display: block;
        position: relative;
        width: 100%;
        min-height: 100px;
        padding: 20px;
        color: var(--font-color);
        border-radius: var(--border-radius);
        transition: all .3s ease;

        &:hover {
          background-color: #f0f0f0;
          transform: scale(1.02);
        }

        /deep/ .blog-item-title {
          font-size: 25px;
          padding: 10px 0;
        }

        /deep/ .blog-item-description {
          max-width: 100%;
          center {
            display: block;
            text-align: center;
          }
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: @min-width) {
  .content {
    .blog-list {
      .blog-row {
        justify-content: flex-start;
        /deep/ .blog-item {
          width: 100%;
          .blog-item-title::after {
            display: none;
          }
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
