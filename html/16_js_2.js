const msg = document.getElementById("msg");
var cnt = 0;

function count(){
  if(cnt<20){
    cnt = cnt+2;
  }
  msg.innerText = cnt;
}

function zero(){
  cnt = 0;
  msg.innerText = cnt;
}