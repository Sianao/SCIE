function speed(m){
    let video =document.getElementById("video")
    video.playbackRate=m;
 }
 function change(){
     let upload =document.getElementById("upload");
     let filelist=upload.files;
     let video =document.getElementById("video")
     video.src=URL.createObjectURL(filelist[0])
     console.log(filelist[0].size,filelist[0].name)
 }
 
 function play(){
     let video=document.getElementById("video")
     // video.c
     if (video.paused)
         video.play();
     else
         video.pause();
 }
 // function read(){
 //     let v =document.getElementById("upload").files[0];
 //     let reader =new FileReader;
 //     reader.readAsDataURL(v);
 //     // console.log(reader.)
 //     reader.onload=function(event){
 //         m =document.getElementById("video");
 //         console.log(m.duration);
 //         m.src=event.target.result;
 //     }
 // }
 function duration(){
     let video=document.getElementById("video")
     console.log(video.duration)
     
     let time=document.getElementById("timeup")
     console.log(time.value)
     video.currentTime=parseInt((time.value)*video.duration/100)
 }
 function voice(){
     let video=document.getElementById("video")
     let volumn=document.getElementById("vol")
     video.volume=((volumn.value)/100)
 }
  
 