import Mock from 'mockjs';
//模拟后台接口数据
// const data=Mock.mock({
//   'string|1-4':'你好！'
// })

//都是以c开头的如果去掉c则是英文
/* const data=Mock.mock({
    id:'@increment(1)',//生成增量id
    string:'@cword(3,10)',//生成一个范围的字符
    title:'@ctitle(8)',//生成标题
    sentence:'@sentence(50)',//生成句子
    content:'@cparagraph()',//生成段落
    "number|1-80":1,//生成数值
}) */

//随机生成姓名-地址-身份证号
/* const data=Mock.mock({
    name:'@cname()',
    idCard:'@id()',
    address:'@city(true)'//加true会返回省、市
}) */

//随机生成图片
/* const data=Mock.mock({
    img_url:"@image('250x250','#FFA07A0','#FFBBFF','png','空空')"
}) */

//生成时间
/* const data=Mock.mock({
    date:'@date(yyyy-MM-dd hh:mm:ss)'
}) */
//指定数组返回条数
/* const data=Mock.mock({
   'list|5-10':[{
    name:'@cname()',
    idCard:'@id()',
    address:'@city(true)'
   }
   ]
}) */

//定义get请求
/* Mock.mock('/api/news','get',{
    status:200,
    msg:'获取数据成功'
}) */

//定义拦截post请求
/* Mock.mock('/api/post/news','post',()=>{
   return{
    status:200,
    msg:'获取post数据成功'
   } 
}) */
//console.log(data);

//实际例子模拟接口

//定义获取新闻列表的数据
var {newsList}=Mock.mock({
    'newsList|75':[{
       'id':'@increment()',
       'title':'@ctitle()',
       'content':'@cparagraph(5,15)',
       'img_url':"@image('100x100','#FF83FA','#FCFCFC','png','世界，你好！')",
       'add_time':'@date(yyyy-MM-dd hh:mm:ss)'
    }]
})

//根据url获取query参数
const getQuery=( url, name)=>{
   const index=url.indexOf('?');
   if(index !==-1){
       const queryStrArr=url.substr(index+1).split('&');
       for(var i=0;i<queryStrArr.length;i++){
           const itemArr =queryStrArr[i].split('=');
           if(itemArr[0]===name){
               return itemArr[1];
           }
       }
   }
   return null;
}

Mock.mock(/\/api\/get\/news/,'get',(options)=>{
    //获取传递的参数pageindex
    const pageindex=getQuery(options.url, 'pageindex');
    //获取传递的参数pagesize
    const pagesize=getQuery(options.url,'pagesize');
    
    const start=(pageindex-1)*pagesize;
    const end=pageindex*pagesize;
    const totalPage=Math.ceil(newsList.length/pagesize);
    const list=pageindex>totalPage?[]:newsList.slice(start,end);
    //截取数据
    //
    //1 0-9
    //2 10-19
    //3 20-29
    //数据的起始位置：(pageindex-1)*pagesize  数据的结束位置：pageindex*pagesize
    return{
        status:200,
        message:'获取新闻列表成功',
        list:list,
        total:newsList.length
    }
})

Mock.mock('/api/add/', 'post',(options)=> {
    // 这里的option是请求的相关参数
    console.log(options);
    return{
        status: 200,
        message: '添加成功',   
    }
  })
