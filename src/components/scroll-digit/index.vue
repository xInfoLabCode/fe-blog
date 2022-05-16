<template>
  <div class="main">
    <div class="head">scroll-digit</div>
    <div class="demo-area">
      <scroll-digit
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
          <input name="reverse" type="radio" value="true" v-model="reverse" @change="refresh" />从左往右
          <input name="reverse" type="radio" value="false" v-model="reverse" @change="refresh" />从右往左
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
import ScrollDigit from './component/index'

export default {
  components: {
    ScrollDigit
  },
  data() {
    return {
      digits: '1234ABCDefgh',
      fontSize: 26,
      reverse: 'false',
      duration: 0.2,
      color: '#fff',
      bgColor: '#0092ff',
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
  margin: 0 100px;
  display: flex;
  flex-direction: column;
}
.head {
  padding: 80px 0 20px;
  text-align: center;
  font-size: 30px;
  color: #666;
}
.demo-area {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #0092ff;
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
  font-weight: 600;
  color: #0092ff;
}
.args-area > div > .title > span {
  font-size: .9em;
  margin-left: .5em;
  font-weight: 400;
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
  border: 1px solid #0092ff;
  outline: none;
}
</style>
