简单的express应用
======

> ###为项目创建目录###
>     $ mkdir lesson2 && cd lesson2
> lesson2目录即为项目所在目录。

> 由于框架是express，因此每个应用都需要express包，安装命令如下：

>     $ npm install --save express --registry-https://.....

> 从官方网站下载不需要后面的registry部分。其他的依赖包的下载命令类似：

>     $ npm install --save PACKAGE_NAME
> 安装完成后，lesson2目录下对应会有node_modules文件夹，查看

>     $ ls node_modules
> 可以看到下载的各类依赖包

> ###创建应用程序入口app.js###
> 新建一个app.js文件

>     $ touch app.js
> 在app.js中添加自己的应用代码，完成后，执行
> 
>     $ node.js
> 查看运行结果
> 
> ###app.js实例###
>     // 引入express模块，并将它赋予'express'这个变量等待使用
>     var express = require('express');
>     // 调用 express 实例，它是一个函数，类似于构造函数
>     var app = express();
>     // app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里>我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
>     // get 方法回接收 req 和 res 两个对象，它们分别是请求的 request 和 response。
>     // res 对象，一般用于定制向 browser 输出的信息，比如 header 信息或者向 browser 显示的信息。
>     //get方法展示了 app 的行为动作。
>     app.get('/', function(req, res){
>       res.send('Hello World’)；
>     })；
>     // 需要让app监听本地3000端口， 来向 browser 输出信息。这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行了一个命令行输出操作，告诉我们监听动作已完成。
>     app.listen(3000, function(){
>       console.log('app is listening at port 3000');
>     });
> 执行 node.js
> 这时候我们的 app 就跑起来了，终端中会输出 app is listening at port 3000。这时我们打开浏览器，访问 http://localhost:3000/，会出现 Hello World。如果没有出现的话，肯定是上述哪一步弄错了，自己调试一下。

> ##端口##
> 端口的作用：通过端口来区分出同一电脑内不同应用或者进程，从而实现一条物理网线(通过分组交换技术-比如internet)同时链接多个程序。
> 
> 端口号是一个 16位的 uint, 所以其范围为 1 to 65535 (对TCP来说, port 0 被保留，不能被使用. 对于UDP来说, source端的端口号是可选的， 为0时表示无端口).
> app在监听3000端口时，表示app这个端口被打标，电脑接收到的3000端口的网络消息就会被发送给启动的进程。