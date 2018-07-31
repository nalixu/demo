

var initData=[];
var alertBg=document.querySelector(".alertBg");

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

function deleteEle(id){
    initData[id].className="delete";
    renderList()
}
 function notice (id){
    document.getElementById('mask').style.display="block";
    document.getElementById('alertBox').style.display="block";
    document.getElementById('btn1Confirm').onclick=function(){
        noticeCon(id)
    }
}
function noticeCon(id){
    document.getElementById('mask').style.display=null;
    document.getElementById('alertBox').style.display=null;
    deleteEle(id);
}

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
        
        item.onclick=function(){
            return notice(initData[i].id)
        };
        item.id=initData[i].id
        item.className=initData[i].className
        item.innerHTML="id:"+initData[i].id+"  "+"value:"+initData[i].value;

        eleByList.append(item);
        
    }
    listContainer.append(eleByList);
 
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

