var express=require('express');//引入模块
var cheerio=require('cheerio');
var superagent=require('superagent');
var app=express();

app.get('/',function(req,res,next){
    // superagent.get('http://news.baidu.com/')//请求页面地址
    superagent.get('https://www.lz13.cn/zhufuyu/182694.html')//请求页面地址
        .end(function(err,sres){//页面获取到的数据
            if(err) return next(err);

            var $=cheerio.load(sres.text);//用cheerio解析页面数据
            var arr=[];

            // $(".ulist.focuslistnews").each(function(index,element){//下面类似于jquery的操作，前端的小伙伴们肯定很熟悉啦
            //     var $eleItem=$(element).find('.bold-item a');
            //     var $eleItemSon=$(element).find('.bold-item ~ li a')
            //     arr.push(
            //         {
            //             title: $eleItem.text(),
            //             href: $eleItem.attr('href'),
            //             item:{
            //                 title: $eleItemSon.text(),
            //                 href: $eleItemSon.attr('href')
            //             }
            //         }
            //     );
            // });
            $("p").each(function(index,element){
                var $eleItem = $(element).text()
                arr.push(
                    {text: $eleItem }
                )
            })
            arr = arr.filter(item => item.text.indexOf("、") != -1)
            for (var value of arr) {
                value.text = value.text.split("、")[1]
                value['count'] = parseInt(Math.random()*100)
            }
            res.send(arr)
        })
    });
app.listen(8888, function () {
    console.log('抓取成功~~~');
});
