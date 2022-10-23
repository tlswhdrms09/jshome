const btn = document.getElementById("btn");
var start;
var end;
var et;

const res = document.getElementById("result");

function check_time(){
  var txt = btn.innerText;

  if(txt == '시작'){
    start = new Date();
    res.innerText = start;
    btn.innerText = '종료'
    btn.style.backgroundColor = '#FF3333';
    result.innerText = "20초 세고 버튼을 다시 누르세요"
  }else{
    end = new Date();
    et = end - start;
    et = parseInt(et/1000);
    res.innerText = et+"초 경과!"
    btn.innerText = '시작'
  }
}