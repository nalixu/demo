var initData=[];
function getValue(){
    if(event.key==="Enter"){
        initData.push({id:initData.length,value:event.target.value,className:'li_item'});
        render();
        event.target.value='';
    }
}
function deleteEle(id){
    ele=event.target;
    initData[id].className="delete";
    render();
}
function render(){
    var listContainer=document.getElementById('listContainer');
    document.getElementById('list').remove();
    var eleByList=document.createElement('ul');
    eleByList.id='list';
    initData.forEach((val,key)=>{
        var item=document.createElement('li');
        var label=document.createElement('label');
        var sp=document.createElement('span');
        var arrow=document.createElement('span');
        arrow.className="arrow";
        arrow.innerHTML='\u21A1';
        item.onclick=function(){
            deleteEle(key);
        }
        item.innerHTML=val.value;
        item.className=val.className;
        eleByList.append(item);
        item.append(label,sp,arrow);


    });
    listContainer.append(eleByList);
}