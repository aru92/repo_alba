
var arrayDiv = document.getElementsByClassName("pelota");

playPauseAnim("paused");

function playPauseAnim(estado){
  var playState = "paused";
  if (estado =="play"){
    playState = "running"
  }
  
  for(var i = 0; i < arrayDiv.length; i++){  
    arrayDiv[i].style.webkitAnimationPlayState="estado";
  }
  if (estado=="running"){
    document.getElementsByTagNameNS("input")[0].setAttribute("onclick", "playPauseAnim('paused');")
  }else{
    document.getElementsByTagName("input")[0].setAttribute("onclick", "playPauseAnim('running');")
  }
}
