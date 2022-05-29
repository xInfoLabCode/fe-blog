<template>
  <div class="virtual-list">
    <h2>Virtual List</h2>
    <div class="scroll-container" :style="containerStyle" @scroll="listScroll">
      <div :style="listStyle" id="list">
        <div class="render-area" :style="renderStyle">
          <div
            v-for="(item, index) in scrollItems"
            :key="item.id"
            :id="index"
            :style="itemStyle"
            class="scroll-list-item"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  props: {
    height: {
      type: Number,
      default: 400
    },
    itemHeight: {
      type: Number,
      default: 40
    },
    hold: {
      type: Number,
      default: 0
    }
  },
  computed: {
    containerStyle() {
      return {
        maxHeight: `${this.height}px`
      }
    },
    listStyle() {
      return {
        height: `${this.itemHeight * this.list.length}px`
      }
    },
    renderStyle() {
      return {
        transform: `translateY(${this.startIndex * this.itemHeight}px)`
      }
    },
    itemStyle() {
      return {
        height: `${this.itemHeight}px`,
        lineHeight: `${this.itemHeight}px`
      }
    },
    scrollItems() {
      return this.list.slice(this.startIndex, this.endIndex)
    }
  },
  data() {
    return {
      list: [],
      startIndex: 0,
      endIndex: 0
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const { Random, mock } = Mock

      this.list = Array.from({ length: 10000 }).map(() => {
        return mock({
          id: Random.natural(),
          text: Random.email()
        })
      })

      this.render()
    },
    listScroll(e) {
      this.render(e.target.scrollTop)
    },
    render(scrollTop = 0) {
      this.startIndex = Math.max((Math.floor(scrollTop / this.itemHeight) - this.hold), 0)
      this.endIndex = Math.min(Math.ceil(this.height / this.itemHeight) + this.hold + this.startIndex, this.list.length)

      console.log('render', scrollTop, this.startIndex, this.endIndex)
    }
  }
}
</script>

<style scoped>
.virtual-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scroll-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  border: 1px solid #0091ff76;
  border-radius: 8px;
  box-shadow: 10px 10px 20px #0091ff76;
  overflow: auto;
}
.render-area {
  will-change: transform;
}
.scroll-list-item {
  border-bottom: 1px dotted #ddd;
}
</style>