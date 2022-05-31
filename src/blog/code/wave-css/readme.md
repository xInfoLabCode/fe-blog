# css实现类似水涌动的效果

## 实现原理
1. 瞄定纹理展示背景框，基于背景框的尺寸，使用伪元素在框上增加div
2. 修改div的border-radius，并增加animation，使div滚动
3. 调整div定位，将div旋转后的部分线条移动到背景框可见
3. 将背景框设置为overflow：hidden，隐藏其它多余线条

参考实现代码
``` html
<div class="container">
  <div class="wave"></div>
</div>
```

``` css
<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 600px;
  
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
      background-color: rgba(3,3,3);
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
```
