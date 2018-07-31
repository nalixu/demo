var initData=[];
function getValue(){
    if(event.key==="Enter"){
        initData.push({
            id:initData.length,
            value:event.target.value,
            className:'li_item'
        });
        event.target.value="";
        render();
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
    eleByList.id="list";
    initData.forEach((val,key)=>{
        var eleContainer=document.createElement('div');
        eleContainer.innerHTML="<li onclick='deleteEle("+key+")'"+"class='"+val.className+"'>"+"<label></label>"
        +"<span>"+val.value+"</span>"+"<span class='arrow'>"+'\u21A1'+"</span>"+"</li>"
        eleByList.append(eleContainer);    
    })
    listContainer.append(eleByList);
}