# animejs

## 介绍
animejs是一个简化动画实现的前端js库，通过animejs能快速生成复杂的交互动画。除了demo所示的渐变效果，还有其它多种数字、图像、svg动画效果

## 开发使用
详细文档请参阅 [animejs](https://www.animejs.cn/documentation)

``` javascript
# 安装
npm i animejs --save

# 使用
import anime from 'animejs'

mounted() {
  anime({
    targets: this.$el.querySelectorAll('.cubic'), // 支持css选择器、dom对象的字符串或数组
    scale: [
      { value: 0.1, easing: 'easeOutSine', duration: 400 },
      { value: 1, easing: 'easeInOutQuad', duration: 800 }
    ],
    // 此处15为图形的列数，20为行数，index为center时即中央，为数字时则从左至右从上到下的偏移量值
    delay: anime.stagger(100, { grid: [7, 8], from: 'center' })
  })
}
```
