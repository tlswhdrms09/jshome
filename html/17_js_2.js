const age = document.getElementById("age");
const result = document.getElementById("result");

function judge(){
  var value = parseInt(age.value);
  var m
  console.log(value);

if (value>0){
  m= "양수"
}else if(value<0){
  m = "음수"
}else{
  m = "영"
  }
  result.innerText = value + "은 " + m + "입니다."
}