document.write("<h1>숫자를 입력받아 출력</h1>");

var n = prompt('n을 입력하시오');
n = parseInt(n);
document.write('n:'+n+'<br>');

var i;
var s = 0
for(i = 1; i<=n;i++){
  s = s+i
  document.write(i+'');
}
document.write('<br>')
document.write('1~'+n+'까지의 합:'+s);