function hello(){
  document.write("hello<br>");
}

function get_day(y,m,d){
  var s_day = ['일','월','화','수','목','금','토'];
  var d = new Date (y, m - 1,d);
  var x = d.getDay();
  return s_day[x];
}


var m = prompt('몇월을 출력할까요?');
m = parseInt(m);

//var s_day = ['일','월','화','수','목','금','토'];
var i;

for(i = 10;i<=20;i++){
  var d = new Date(2022,m - 1,i);
  var dd = get_day(2022,m,i);
  document.write(d.toLocaleString());
  document.write(' '+dd + '요일<br>');

}

