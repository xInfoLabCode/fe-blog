# MacOS前端开发环境搭建

## 1. 系统配置
增加github host，方便后续软件安装

``` shell
sudo vi /etc/host
```

```
# 增加如下host。这个host经常会变，如果失效了，需要重新寻找
185.199.109.133		raw.githubusercontent.com
```

## 2. 系统工具
### 2.1 Brew
brew是Mac OS软件安装工具，安装brew后可以使用命令行在线安装git、iterm等工具。

因github可能下载异常，此处使用了gitee的安装文件。进入命令行，按上下键选择国内的镜像源安装即可

``` shell
/bin/bash -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

### 2.2 Git
参考Readme: https://git-scm.com/download/mac，使用brew安装git和git-gui

``` shell
# Git 
brew install git

# GUI 
brew install git-gui
```

### 2.3 item2
命令行工具推荐iterm2，稳定性和命令行高亮、主题等较系统自带terminal有质的提升

``` shell
brew install iterm2
```

### 2.4 oh-my-zsh(选装)
安装iterm2后，可以选择安装oh-my-zsh。该工具主要用于美化iterm2主题，拓展高亮等。
``` shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"  // 官网的raw.github.com需要替换成raw.githubusercontent.com
```

## 3 开发工具
### 3.1 Host管理工具：switch host
进入[switch host](https://github.com/oldj/SwitchHosts/releases)，选择合适的版本下载到桌面，手动安装即可

### 3.2 代理工具：LightProxy
点击[LightProxy](https://gw.alipayobjects.com/os/LightProxy/LightProxy.dmg)下载到桌面，手动安装即可。LightProxy是阿里开源的免费代理工具，功能包括：
  - host配置（临时host，不会写入etc/host文件）
  - API监听（集成了Whistle，简化了https证书配置等操作）
  - 代理转发（类似Charles，配置更灵活）
  - 页面debugger
  - 移动端代理访问


### 3.3 前端开发IDE：VSCode
点击[VSCode](https://code.visualstudio.com/)进入VSCode官网下载


### 3.4 NodeJs版本管理：nvm
参考[nvm 安装及管理node版本(MacOS)](https://www.jianshu.com/p/144166bf31ad)

注意，需要手动导入环境变量。若nvm安装后使用正常，安装某些软件后突然不可用，一般是环境变量失效了，重新将环境变量导入到当前的profile（如 ~/.zshrc等）

``` shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

m1芯片推荐使用rosetta模式安装：
``` shell
arch -x86_64 zsh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```


### 3.5 FTP工具：Filezilla FTP
进入[Filezilla官网](https://filezilla-project.org/download.php?type=client#close)，选择安装免费版即可


## 4. 其它
### 4.1 python 2.7
最便捷的方式，是直接下载到本地直接安装。
桌面端python下载地址：https://registry.npmmirror.com/binary.html?path=python/2.7.9/


## 5. 设置
### 5.1 关于mac软件安装后无法直接运行
到应用文件夹，找到应用，右键打开

### 5.2  VSCode去除右下角弹窗
1. 找到你vscode的安装路径，并找到workbench文件夹。例如，vscode的安装路径为D:\Microsoft VS Code\时，则打开如下文件夹D:\Microsoft VS Code\resources\app\out\vs\workbench。

2. 打开workbench.desktop.main.css文件，搜索monaco-workbench>.notifications-toasts.visible，将visible设置改成none，即monaco-workbench>.notifications-toasts.visible{display:none;flex-direction:column}。保存文件
