let id
function getlocation(){
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(function(position){
            let x=document.getElementById("location");
            x.innerHTML="纬度: " + position.coords.latitude + 
            "<br>经度: " + position.coords.longitude; 
        });
    else
        x.innerHTML="该浏览器不支持获取地理位置。";
}
function watchposition(){
   id= navigator.geolocation.watchPosition(function(position){
        let x=document.getElementById("location");
            x.innerHTML="纬度: " + position.coords.latitude + 
            "<br>经度: " + position.coords.longitude; 
    })
    console.log(id)

}
function cancel(){
    
    navigator.geolocation.clearWatch(id);

}