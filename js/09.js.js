document.write('<h1>1~10합 구하기</h1>');

var j;
var s=0
f = '0'
for(i = 1; i<=10;i++){
  f = f+'+'+i
  s = s+i
  //document.write('i = '+i);
  //document.write(', s ='+s+'<br>');

  document.write(f+' = '+s+ '<br>');
}

document.write('<br>합계:'+s);