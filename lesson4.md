eventproxy完成并发
======

>     var ep = new EventProxy();
>     ep.all('tpl', 'data', function(tpl. data) {
>       //tpl 和 data是事件， all方法将handler注册到事件组合上，当注册的所有事件都触发后， 将会调用handler执行处理操作，事件传递的数据将会按照事件名顺序， 传入handler作为参数。
>     })
> 重复异步操作：after方法适合重复的操作。

>     var ep = new EventProxy();
>     ep.after('got_file', files.length, function(list){
>       //所有文件的异步执行结束后被执行，所有文件的内容都存在list数组中
>     })
>     for(var i = 0; i < files.length; i ++){
>       //触发结果事件
>       ep.emit('got_file', content);
>     });
>     }

###实例###
######抓取cnode社区的文章，并获得其评论和标题######

>     var eventproxy = require('eventproxy');
	  var superagent = require('superagent');
	  var cheerio = require('cheerio');
	  var url = require('url');
  	  var cnodeUrl = 'https://cnodejs.org/';
      //从cnodeUrl抓取页面xml文件，放入res中
	  superagent.get(cnodeUrl).end(function (err, res) {
        if (err) {
          return console.error(err);
        }
    	var topicUrls = [];
      //依赖cheerio包对文件进行类似js处理，获得每篇文章的url
    	var $ = cheerio.load(res.text);
		$('#topic_list .topic_title').each(function (idx, element){
     	  var $element = $(element);
      	  var href = url.resolve(cnodeUrl, $element.attr('href'));
     	  topicUrls.push(href);
   		});
      //根据得到的topicUrls对每篇文章异步抓取topic和评论，依赖eventproxy包
    	var ep = new eventproxy();
        //after方法在所有监听的事件完成后，对数据进行处理，每个事件传递的参数都是有序对
    	ep.after('topic_html', topicUrls.length, function (topics){
     	  topics = topics.map(function (topicPair) {
       	  var topicUrl = topicPair[0];
          var topicHtml = topicPair[1];
      	  var $ = cheerio.load(topicHtml);
      	  return ({
        	title: $('.topic_full_title').text().trim(),
            href: topicUrl,
            comment1: $('.reply_content').eq(0).text().trim(),
          });
        });

      	console.log('final:');
      	console.log(topics);
      });
      //根据得到的每篇文章的url抓取文章标题和第一条评论，抓取完成后，发送emit消息并将数据[topicUrl,res.text]传递给handler
      topicUrls.forEach(function (topicUrl) {
     	superagent.get(topicUrl).end(function (err, res) {
          console.log('fetch ' + topicUrl + ' successful');
          ep.emit('topic_html', [topicUrl, res.text]);
        });
      });
    });




