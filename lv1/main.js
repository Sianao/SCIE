i=0;
let video=document.getElementById("v")



function play(){
    if (video.paused)
        video.play();
    else
        video.pause();
    
}
function next(){
  let upload =document.getElementById("upload");
let filelist=upload.files;
  if (i<filelist.length-1){

  i++;
  video.src=URL.createObjectURL(filelist[i])
  console.log(filelist[i].size,filelist[i].name)


}

}
function last(){
  let upload =document.getElementById("upload");
let filelist=upload.files;
  if (i>0){
    i--;
    video.src=URL.createObjectURL(filelist[i])
    console.log(filelist[i].size,filelist[i].name)
  }
}
