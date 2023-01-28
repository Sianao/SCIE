let m=""
function save(){
   
    console.log(sessionStorage)
    let key =document.getElementsByName("key")[0].value
    let value=document.getElementsByName("value")[0].value
    if (key.length==0||value.length==0){
        alert("请输入键值对")
    }
    if (sessionStorage.getItem(key)!=null){
        alert("该键值对已经存在")
        return
    }
    sessionStorage.setItem(key,value)
    result=document.getElementById("result")
    // result
    result.innerHTML+="<tr>"+
    "<td>"+key+"</td>"+
    "<td>"+value+"</td>"+
    "</tr>"
    console.log(key,value)
}