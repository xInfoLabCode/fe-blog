<template>
  <div class="digit-item" :style="digitItemStyle">
    <div class="scroll-area">
      <div class="scroll-list" :style="scrollListStyle">
        <div class="item">0</div>
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
      </div>
    </div>
    <div class="real-digit" :style="realDigitStyle">
      {{ digit }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    digit: {
      type: [Number, String],
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    // 透传props
    digits: [Number, String],
    fontSize: [Number, String],
    color: String,
    bgColor: String,
    duration: Number,
    reverse: Boolean
  },
  computed: {
    animationIterationCount() {
      if (this.reverse) {
        return this.duration / 0.1 * (this.index + 1)
      }
      return (`${this.digits}`.length - this.index) * this.duration / 0.1
    },
    digitItemStyle() {
      return {
        backgroundColor: this.bgColor,
        color: this.color,
        fontSize: `${this.fontSize}px`,
      }
    },
    scrollListStyle() {
      return {
        animationIterationCount: this.animationIterationCount,
      }
    },
    realDigitStyle() {
      return {
        ...this.digitStyle,
        animationIterationCount: this.animationIterationCount
      }
    }
  }
}
</script>

<style scoped>
@keyframes scrollDigit {
  0% { transform: translateY(0); visibility: visible; }
  10% { transform: translateY(-10%); visibility: visible; }
  20% { transform: translateY(-20%); visibility: visible; }
  30% { transform: translateY(-30%); visibility: visible; }
  40% { transform: translateY(-40%); visibility: visible; }
  50% { transform: translateY(-50%); visibility: visible; }
  60% { transform: translateY(-60%); visibility: visible; }
  70% { transform: translateY(-70%); visibility: visible; }
  80% { transform: translateY(-80%); visibility: visible; }
  90% { transform: translateY(-90%); visibility: visible; }
  100% { transform: translateY(-100%); visibility: visible; }
}

@keyframes realDigit {
  0% { visibility: hidden; }
  99% { visibility: hidden; }
  100% { visibility: visible; }
}

.digit-item {
  display: inline-block;
  position: relative;
  text-align: center;
}
.scroll-area {
  position: absolute;
  overflow: hidden;
  height: 100%;
}
.scroll-list {
  animation: scrollDigit .1s ease-out alternate;
  visibility: hidden;
}
.real-digit {
  text-align: center;
  animation: realDigit .1s ease-out;
}
</style>
