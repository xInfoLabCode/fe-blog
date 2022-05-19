# MacOS前端开发环境搭建

## 1. 系统配置
增加github host，方便后续软件安装

``` shell
sudo vi /etc/host
```
```
# 增加如下host
199.232.68.133		raw.githubusercontent.com
```

## 2. 系统工具
### 2.1 Brew
brew是Mac OS软件安装工具，安装brew后可以使用命令行在线安装git、iterm等工具

``` shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
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
点击[switch host](https://objects.githubusercontent.com/github-production-release-asset-2e65be/2312977/cd823c9c-d5b1-4a38-9cc7-948b6086ce12?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220216%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220216T144558Z&X-Amz-Expires=300&X-Amz-Signature=b2)下载到桌面，手动安装即可

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


### 3.5 FTP工具：Filezilla FTP
进入[Filezilla官网](https://filezilla-project.org/download.php?type=client#close)，选择安装免费版即可


## 4. 其它
### 4.1 开放第三方软件运行权限
到应用文件夹，找到应用，右键打开

### 4.2  去除VSCode右下角弹窗
1. 找到你vscode的安装路径，并找到workbench文件夹。例如，vscode的安装路径为D:\Microsoft VS Code\时，则打开如下文件夹D:\Microsoft VS Code\resources\app\out\vs\workbench。

2. 打开workbench.desktop.main.css文件，搜索monaco-workbench>.notifications-toasts.visible，将visible设置改成none，即monaco-workbench>.notifications-toasts.visible{display:none;flex-direction:column}。保存文件
