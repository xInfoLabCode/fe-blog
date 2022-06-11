# Fe-Blog

![fe-blog](https://blog.xinfolab.com/readme/fe-blog.png)

## 前言

该项目是一个基于vue2的纯前端博客项目，支持markdown博文，也可以同时展示博文和对应的前端页面demo

开发此项目，一是为了学习经典前端组件、算法和方案设计，积累和分享前端开发知识；二则为探索更佳的博客产品

项目里面包含了一些经典的前端开发设计方案和相应的实现，可以访问[xinfolab](https://blog.xinfolab.com)进行浏览


### 收集组件列表
+ scroll-digit [滚动的数字](https://blog.xinfolab.com/#/code/scroll-digit) 
+ virtual-list [虚拟滚动](https://blog.xinfolab.com/#/code/virtual-list)
+ worker [js多线程](https://blog.xinfolab.com/#/code/worker)
+ ...

更多博文，请访问[xinfolab](https://blog.xinfolab.com)


## 项目开发

### 本地开发

``` shell
# 克隆代码
git clone git@github.com:RandomFE/fe-blog.git

# 推荐使用vscode启动开发
cd fe-blog
npm install

# 启动调试
npm run dev
```

## 项目发布

当前项目主要发布使用main分支打包，并通过打包生成内容推送到gh-pages分支，使用github的pages发布线上浏览（github pages可以在项目的设置中找到）

### 打包

``` shell
# 进入fe-blog目录
cd fe-blog

# 切换到main分支
git checkout main
npm install # 如已安装node_modules请跳过
npm run build
```

相关打包内容在fe_blog/dist文件夹，纯静态文件，可直接发布

### github pages发布

``` shell
# 使用github pages发布（注：分支名称、域名等可在github pages中配置）
git checkout gh-pages 
# 项目已经配置了release命令，会将dist文件夹内容自动复制到指定目录
npm run release

# 提交到gh-pages分支即可
git add .
git commit -m release
git push
```

发布后，可以进入到预设的pages url上浏览，一般提交push后可在1min内看到更新

## 最后

项目框架和博文都会不断更新，欢迎关注~