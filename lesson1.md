安装环境
======

> 首先在虚拟机上安装ubuntu，不然关掉虚拟机啥都没了啊~！！！
> ###安装nvm###
> Node Version Manager，用于切换各种版本的Node.js
> ###安装Node.js###
>     $ nvm install VERSION-NUMBER
> 用nvm ls查看是否安装成功（ls真是个好命令哈哈哈哈哈哈）

> 安装完成后，会出现开启新的shell窗口，输入node又找不到的情况哦，请按如下方法解决：
> 
>     $ nvm alias default 0.12
> 

包管理器npm
======

> 安装Node.js框架之前需要安装npm——Node Package Manager,node里面的包管理器，自动管理包的依赖情况，我们只需安装自己要安装的包。
> 安装命令如下：
> 
>     $ sudo apt-get install npm

框架express
======

> express是Node.js应用最广泛的Web框架[官网][http://expressjs.com/]
> 
> Node.js的依赖以项目为单位管理，每一个项目目录中，有对应的node_modules目录，用于安装所需的包。  
>  