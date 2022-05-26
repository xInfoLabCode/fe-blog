<template>
  <div class="timeline">
    <div class="blog-list">
      <div v-for="item in list" :key="item.url" :class="getClass(item)">
        <Markdown v-if="item.type==='markdown'" :blog="item" />
        <Code v-else :blog="item" />
      </div>
    </div>
    <div class="time-col"></div>
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
    },
    getClass(item) {
      return [
        'blog-row',
        'wow',
        item.type,
        item.type === 'code' ? 'fadeInLeft' : 'fadeInRight'
      ]
    }
  }
}
</script>

<style scoped lang="less">
.timeline {
  display: flex;
  align-items: stretch;
  position: relative;

  .blog-list {
    width: 100%;

    .blog-row {
      display: flex;
      width: 100%;
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }

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
        position: relative;
        width: calc(50% - 50px);
        min-height: 100px;
        padding: 10px 20px 20px;
        background-color: #eee;
        border-radius: var(--border-radius);
        border: 1px solid #eee;
        border-bottom: 3px solid #ccc;
        transition: all 1s ease;

        &:hover {
          color: var(--font-color-dark);
          background-color: #ddd;
          border-bottom: 3px solid #aaa;
          /deep/ .blog-item-title {
            &:after {
              height: 100%;
              top: 0;
              background-color: var(--theme-color);
            }
          }
        }

        /deep/ .blog-item-title {
          font-size: 18px;
          padding: 10px 0;

          &:after {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: #aaa;
            position: absolute;
            right: -56px;
            top: 25px;
            z-index: 10;
            transition: all 1s ease;
            animation: fadeIn 2s ease alternate both;
          }
        }

        /deep/ .blog-item-description {
          line-height: 20px;
        }
      }
    }
  }

  .time-col {
    height: calc(100% - 100px);
    width: 10px;
    position: absolute;
    top: 50px;
    left: calc(50% - 5px);
    background-color: #eee;
    border-radius: var(--border-radius);
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
