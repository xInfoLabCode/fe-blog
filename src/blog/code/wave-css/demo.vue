<template>
  <div class="wave-css">
    <div class="wave-type">
      是否展示线条原型：
      <label><input type="radio" name="isShowProto" :value="true" v-model="isShowProto" />是</label>
      <label><input type="radio" name="isShowProto" :value="false" v-model="isShowProto" />否</label>
    </div>
    <div class="container" :class="{'show-proto': isShowProto}">
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowProto: false
    }
  }
}
</script>

<style lang="less" scoped>
.wave-type {
  padding: 10px 0 20px;
  label + label {
    margin-left: 20px;
  }
}
.container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  &.show-proto {
    overflow: autp;
    .wave {
      overflow: auto;
    }
  }

  .wave {
    position: absolute;
    bottom: 0;
    height: 400px;
    width: 1000px;
    border-radius: 8px;
    background-color: #f2f2f2;
    will-change: transform;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      left: -50%;
      top: 350px;
      transform: translateY(100%);
      background-color: var(--theme-color);
    }

    &::before {
      height: 1800px;
      width: 1800px;
      border-radius: 35% 48% 35% 48%;
      animation: 
        wave-color 13s linear infinite alternate both, 
        wave-rotate 17s linear infinite;
    }

    &::after {
      height: 2200px;
      width: 2200px;
      border-radius: 48% 40% 48% 40%;
      animation:
        wave-color 17s linear infinite alternate both,
        wave-rotate 13s linear infinite;
    }
  }
}

@keyframes wave-color {
  from {
    opacity: .1;
  }
  30% {
    opacity: .25;
  }
  60% {
    opacity: .1;
  }
  to {
    opacity: .25;
  }
}

@keyframes wave-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
