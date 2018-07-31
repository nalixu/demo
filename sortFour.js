var str=`3001  下载
3002  激活(用户第一次打开app)
3003  进入注册页面
3004  注册页面>>点击注册按钮
3005  开通存管>>立即开通按钮点击
3006  开通存管页面进入
3007  开通存管>>提交按钮点击
3008  开通存管>>支持银行点击
3009  进入充值页面
3010  充值页面>>提交按钮
3011  充值页面>>人众金服充值协议
3012  充值页面>>进入验证码输入页面`;
var arr=str.split(/\n/g);
var initData=[];
for(var i=0;i<arr.length;i++){
    var intStr=arr[i].substr(0,4);
    var strS=arr[i].substr(6);
    initData.push({id:intStr,name:strS});
}
function filterData(){
    for(var i=0;i<initData.length-1;i++){
        for(var j=0;j<initData.length-1-i;j++){
            if(initData[j].id<initData[j+1].id){
                var k=[];
                k=initData[j];
                initData[j]=initData[j+1];
                initData[j+1]=k;
            }
        }
    }
    console.log(initData,'倒序');
    renderList();
}
function filterData1(){
    for(var i=0;i<initData.length-1;i++){
        for(var j=0;j<initData.length-1-i;j++){
            if(initData[j].id>initData[j+1].id){
                var k=[];
                k=initData[j];
                initData[j]=initData[j+1];
                initData[j+1]=k;
            }
        }
    }
    console.log(initData,'升序');
    renderList();
}
function renderList(){
    var listContainer=document.getElementById('listContainer');
    //把原有的数据移除
    document.getElementById('list').remove();
    var eleByList=document.createElement('ul');
    eleByList.id='list';
     for(var i=0;i<initData.length;i++){
         var item=document.createElement('li');
         item.innerHTML="id:"+initData[i].id+" "+"value:"+initData[i].name;
         eleByList.append(item);
     }
     listContainer.append(eleByList);

}