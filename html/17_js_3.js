const score = document.getElementById("score");
const result = document.getElementById("result");

function judge(){
  var value = parseInt(score.value);
  var m
  console.log(value);
if (value>=90){
  m = "A"
}else if (value >=80){
  m = "B"
}else if (value >=70){
  m = "C"
}else if (value >=60){
  m = "D"
}else{
  m = "F"
  }
  result.innerText = value +"점은 "+ m +"학점입니다."
}