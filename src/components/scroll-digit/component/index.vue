<template>
  <div class="scroll-digit">
    <div v-for="(item, index) in digitArray" :key="`${digits}_${index}`">
      <Digit :digit="item" :index="index" v-bind="$props" />
    </div>
  </div>
</template>

<script>
import Digit from './digit.vue'

export default {
  components: {
    Digit
  },
  props: {
    digits: {
      type: [Number, String],
      required: true
    },
    fontSize: {
      type: Number,
      default: 26
    },
    // 最先翻滚的字符，滚动时常
    duration: {
      type: Number,
      default: 0.2
    },
    color: String,
    bgColor: String,
    reverse: Boolean // 默认从右往左滚动，reverse为true则从左往右滚动
  },
  computed: {
    digitArray() {
      return `${this.digits}`.split('')
    }
  },
}
</script>

<style scoped >
.scroll-digit {
  display: inline-block;
  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
}
.scroll-digit > div {
  display: inline-block;
}
</style>
