<template>
  <div class="main">
    <div class="head">scroll-digit</div>
    <div class="demo-area">
      <VueScrollDigit
        :digits="digits"
        :fontSize="fontSize"
        :reverse="reverse==='true' ? true : false"
        :duration="duration"
        :color="color"
        :bgColor="bgColor"
      />
    </div>
    <div class="args-area">
      <div>
        <div class="title">digits: String <span>【必填】动态展示字符，数字或字符串，支持中文</span></div>
        <input type="text" v-model="digits" />
      </div>
      <div>
        <div class="title">fontSize: Number <span>字符大小，单位px。默认26</span></div>
        <input v-model="fontSize" @blur="refresh" />
      </div>
      <div>
        <div class="title">reverse: Boolean <span>reverse为true则从左往右。默认false</span></div>
        <div class="radio-group">
          <label><input name="reverse" type="radio" value="true" v-model="reverse" @change="refresh" />从左往右</label>
          <label><input name="reverse" type="radio" value="false" v-model="reverse" @change="refresh" />从右往左</label>
        </div>
      </div>
      <div>
        <div class="title">duration: Number <span>最开始滚动的字符滚动时长，用于调节滚动效果。默认0.2</span></div>
        <input v-model="duration" @blur="refresh" />
      </div>
      <div>
        <div class="title">color: String <span>字符颜色，取值参考：#fff</span></div>
        <input v-model="color" @blur="refresh" />
      </div>
      <div>
        <div class="title">bgColor: String <span>字符背景色，取值参考：#0092ff</span></div>
        <input v-model="bgColor" @blur="refresh" />
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollDigit from 'vue-scroll-digit'

export default {
  components: {
    VueScrollDigit
  },
  data() {
    return {
      digits: '1234ABCDefgh',
      fontSize: 26,
      reverse: 'false',
      duration: 0.2,
      color: '#000',
      bgColor: 'transparent',
    }
  },
  methods: {
    refresh() {
      const digits = this.digits
      this.digits = ''

      setTimeout(() => {
        this.digits = digits
      })
    }
  }
}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
}
.head {
  padding: 20px 0;
  text-align: center;
  font-size: 30px;
}
.demo-area {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
}
.args-area {
  padding: 20px 30px;
  border-radius: 8px;
  color: #666;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 10px #f2f2f2;
}
.args-area > div {
  padding: 10px;
}
.args-area > div > .title {
  color: var(--theme-color);;
}
.args-area > div > .title > span {
  margin-left: .5em;
  color: #999;
}
.args-area input {
  padding: 8px;
  color: #666;
  font-size: 18px;
  border: 1px transparent solid;
  box-shadow: 10px 10px 100px #ddd;
  margin: 5px 0 10px;
  border-radius: 4px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.args-area .radio-group {
  display: flex;
  padding: 5px 0;
}
.args-area .radio-group input {
  width: auto;
  margin-right: 5px;
}
.args-area .radio-group input + input {
  margin-left: 20px;
}
.args-area input:focus-visible {
  border: 1px solid var(--theme-color);
  outline: none;
}
</style>
