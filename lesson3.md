superagent和cheerio完成简单爬虫
======

> 输出[CNode](https://cnodejs.org)社区首页，以json的形式。
>     
>     [
>       {
>         "title": "......",
>         "href": "......"
>       }
>     ]

> [superagent](http://visionmedia.github.io/superagent/)是http方面的库， 可以发起get或post请求。
> 
> [cheerio](https://github.com/cheeriojs/cheerio)是用于网页分析的，类似于jquery，从网页中以css selector取数据，类似于jquery中的DOM操作。

>     mkdir lesson3 && cd lesson3
>     npm init //构建package.json文件
>     npm install --save PACKAGE_NAME
> 安装express、superagent和cheerio依赖包；
> 写应用逻辑

>     app.get('/', function(req, res, next){
>       superagent.get('https://cnodejs.org').end(function(err, sres){
>         //常规错误处理
>         if(err){
>           return next(err);
>           }
>         // sres.text 存储网页的html内容，传给cheerio.load，得到一个实现了 jQuery 接口的变量
>         var $ = cheerio.load(sres.text);
>         var items = [];
>         $('#topic_list .topic_title').each(function(idx, element){
>           var $element = $(element);
>           items.push({
>             title： $element.attr('title'),
>             href: $element.attr('href')
>           });
>         });
>         res.send(items);
>       });
>     });





