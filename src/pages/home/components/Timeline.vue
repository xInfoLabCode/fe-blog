<template>
  <div class="timeline">
    <div class="blog-list">
      <div v-for="item in list" :key="item.url" class="blog-row" :class="item.type">
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
      width: calc(50% - 50px);
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      &.markdown {
        justify-content: flex-end;
      }

      .blog-item {
        padding: 10px 20px 20px;
        width: calc(50% - 50px);
        background-color: #eee;
        border-radius: var(--border-radius);
        transition: box-shadow .3s ease;

        &:hover {
          box-shadow: 10px 10px 5px #eee;
        }

        /deep/ .blog-item-title {
          font-size: 18px;
          display: inline-block;
          padding: 10px 0;
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
</style>
