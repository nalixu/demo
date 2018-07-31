// var initData=[{name:'jason',age:18},{name:'bob',age:58},{name:'tom',age:16},{name:'bella',age:28}];
// var str=`3001  下载
// 3002  激活(用户第一次打开app)
// 3003  进入注册页面
// 3004  注册页面>>点击注册按钮
// 3005  开通存管>>立即开通按钮点击
// 3006  开通存管页面进入
// 3007  开通存管>>提交按钮点击
// 3008  开通存管>>支持银行点击
// 3009  进入充值页面
// 3010  充值页面>>提交按钮
// 3011  充值页面>>人众金服充值协议
// 3012  充值页面>>进入验证码输入页面`;
// var arr=str.split(/\n/g);

// console.log(arr);

var initData=[];
var alertBg=document.querySelector(".alertBg");
// for(var i=0;i<arr.length;i++){
//     var intStr=arr[i].substr(0,4);
//     var strS=arr[i].substr(6);
//     initData.push({id:intStr,name:strS});
// }
// console.log(initData);
// function getValue(){
//     if(event.key==="Enter"){
//         initData.push(event.target.value);
//         event.target.value="";
        
//     }
// }
function getValue(){
    if(event.key==="Enter"){
        initData.push({
            id:initData.length,
            value:event.target.value,
            className:'li_item'
        });

        event.target.value="";
        renderList();
    }
}
// function deleteEle(id){
//     ele=event.target;
//     // initData[id].className= "delete";
//     // render()
    
//     ele.className="delete";
// }
function deleteEle(id){
    // initData[0].className="delete";
    initData[id].className="delete";
    renderList()
}
 function notice (id){
    document.getElementById('mask').style.display="block";
    document.getElementById('alertBox').style.display="block";
    document.getElementById('btn1Confirm').onclick=function(){
        // var liId = event.target.id;
        // console.log(liId)
        noticeCon(id)
    }
}
function noticeCon(id){
    document.getElementById('mask').style.display=null;
    document.getElementById('alertBox').style.display=null;
    deleteEle(id);
}
// function showConfirm(){
//     window.confirm("确定删除？");
// }
function filterData(){
    for(var i=0;i<initData.length-1;i++){
        for(var j=0;j<initData.length-1-i;j++){
            if(j>initData.length-1){
                break;
            }
            else{
                if(initData[j].id<initData[j+1].id){
                    var k=[];
                    k=initData[j];
                    initData[j]=initData[j+1];
                    initData[j+1]=k;
                }
            }
        }
    }
    console.log(initData,'倒序');
    renderList();
}

function filterData1(){
    for(var i=0;i<initData.length-1;i++){
        for(var j=0;j<initData.length-1-i;j++){
            if(j>initData.length-1){
                break;
            }
            else{
                if(initData[j].id>initData[j+1].id){
                    var k=[];
                    k=initData[j];
                    initData[j]=initData[j+1];
                    initData[j+1]=k;
                }
            }
        }
    }
    console.log(initData,'升序');
    renderList();
}
function renderList(){
    var add=document.getElementById('add');
    var des=document.getElementById('des');
    var listContainer=document.getElementById('listContainer');
    document.getElementById('list').remove();
    var eleByList=document.createElement('ul');
    eleByList.id='list';
    for(let i=0;i<initData.length;i++){

        var item=document.createElement('li');
        // item.className='li_item';
        // if(add.onclick){
        //     filterData();
        //     item.innerHTML=initData[i].id+initData[i].name;
        // }
        //     else{
        //         filterData1();
        //         item.innerHTML=initData[i].id+initData[i].name;
        //     }
        // item.innerHTML=initData[i].id+initData[i].value;
        // var key=item.id;
        // item.onclick=function(){
        //     deleteEle(key);
        // }
        // item.onclick=deleteEle;
        // var btn1=document.getElementById('btn1Confirm');
        // var btn2=document.getElementById('btn2Cancel');
        // btn1.onclick=deleteEle(key);
        // btn2.onclick=function(){
        //     document.getElementById('mask').style.display="null";
        //     document.getElementById('alertBox').style.display="null";
        // }
        item.onclick=function(){
            return notice(initData[i].id)
        };
        item.id=initData[i].id
        item.className=initData[i].className
        item.innerHTML="id:"+initData[i].id+"  "+"value:"+initData[i].value;

        eleByList.append(item);
        
    }
    listContainer.append(eleByList);
    // filterData();
  
}
// var mask=document.getElementById('mask');
// var alertBox=document.getElementById('alertBox');


// function renderList1(){
// for(var j=0;j<initData.length;j++){
//     var item1=document.createElement('li');
//     item1.className='li_item1';
//     item1.innerHTML=initData[j].id+initData[j].name;
//     listContainer.append(item1);
  
// }
// }
// filterData1();

