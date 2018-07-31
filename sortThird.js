var initData=[];
function getValue(){
    if(event.key==="Enter"){
        initData.push({
            id:initData.length,
            value:event.target.value,
            className:'li_item'
        })
        event.target.value='';
        renderList();
    }
}
function deleteEle(id){
    initData[id].className="delete";
    renderList();
}
function notice(id){

    document.getElementById('mask').className="show_mask";
    document.getElementById('alertBox').className="alertBox";
    // document.getElementById('mask').style.display="block";
    // document.getElementById('alertBox').style.display="block";
    document.getElementById('btn1Confirm').onclick=function(){
        noticeCon(id);
    }
    document.getElementById('btn2Cancel').onclick=function(){
        noticeCan(id);
    }
}
function noticeCon(id){
    document.getElementById('mask').className="hidden_mark";
    // document.getElementById('alertBox').style.display=null;
     deleteEle(id);   
}
function noticeCan(id){
    document.getElementById('mask').className="hidden_mark";
    // document.getElementById('mask').style.display=null;
    // document.getElementById('alertBox').style.display=null;
}
function filterData(status){
    for(var i=0;i<initData.length-1;i++){
        for(var j=0;j<initData.length-1-i;j++){
            var k=[];
            if(status==0 && initData[j].id<initData[j+1].id){
                k=initData[j];
                initData[j]=initData[j+1];
                initData[j+1]=k;
                // console.log(initData,'倒序');
            } else if(status ==1 && initData[j].id>initData[j+1].id){
                k=initData[j];
                initData[j]=initData[j+1];
                initData[j+1]=k;
                // console.log(initData,'升序');
            }
        }
    }
    // console.log(initData,'倒序');
    renderList();
}
// function filterData1(){
//     for(var i=0;i<initData.length-1;i++){
//         for(var j=0;j<initData.length-1-i;j++){
//             if(j>initData.length-1){
//                 break;
//             }
//             else{
//                 if(initData[j].id>initData[j+1].id){
//                     var k=[];
//                     k=initData[j];
//                     initData[j]=initData[j+1];
//                     initData[j+1]=k;
//                 }
//             }
//         }
//     }
//     console.log(initData,'升序');
//     renderList();
// }
function renderList(){
    var listContainer=document.getElementById('listContainer');
    document.getElementById('list').remove();
    var eleByList=document.createElement('ul');
    eleByList.id='list';
    for(let i=0;i<initData.length;i++){
        var item=document.createElement('li');
        item.onclick=function(){
            return notice(initData[i].id);
        }
        item.id=initData[i].id
        item.className=initData[i].className
        item.innerHTML="id"+initData[i].id+" "+"value:"+initData[i].value;
        eleByList.append(item);
    }
    listContainer.append(eleByList);
}
