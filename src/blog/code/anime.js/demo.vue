<template>
  <div class="demo" @click="beginAnimate">
    <span v-for="row in rows" :key="row" class="row">
      <span v-for="col in cols" :key="col" :index="`${row}-${col}`" class="cubic"></span>
    </span>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  data() {
    return {
      rows: 8,
      cols: 7,
      animating: false
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    beginAnimate(e) {
      window.e = e
      let cubicIndex = 0

      const { target } = e
      if (target.classList?.contains('cubic')) {
        const data = target.getAttribute('index')?.split('-')
        data && (cubicIndex = (data[0] - 1) * this.cols + (data[1] - 1))
      }

      this.animate(cubicIndex)
    },
    animate(index = 'center') {
      if (this.animating) {
        return
      }

      anime({
        targets: this.$el.querySelectorAll('.cubic'),
        scale: [
          { value: 0.1, easing: 'easeOutSine', duration: 400 },
          { value: 1, easing: 'easeInOutQuad', duration: 800 }
        ],
        delay: anime.stagger(100, { grid: [this.cols, this.rows], from: index }),
        begin: () => {
          this.animating = true
        },
        complete: () => {
          this.animating = false
        }
      })
    }
  }
}
</script>

<style scoped>
.demo {
  text-align: center;
}
.row {
  display: block;
}
.cubic {
  display: inline-block;
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #f2f2f2;
  box-shadow: 0 0 10px inset #999;
}
</style>