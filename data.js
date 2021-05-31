var day=new Date;
var today_Date=day.getDate();
var today_Month=day.getMonth()+1;
var today=day.getTime();
document.querySelector("#today").innerHTML=(today_Month+"월"+today_Date+"일 기준으로 개통시<br> (일요일 판매건은 +1일)");
var D120=today+120*(24*60*60*1000);
var D180=today+180*(24*60*60*1000);

var Yo_Hal=new Date(D120);
var Gong_Si=new Date(D180);

document.querySelector("#select25per").innerHTML="<h2>요금할인 개통시</h2>"+Yo_Hal.getFullYear()+"년"+(Yo_Hal.getMonth()+1)+"월"+Yo_Hal.getDay()+"일 요금제 변경 가능";
document.querySelector("#gong").innerHTML="<h2>공시지원금 개통시</h2>"+Gong_Si.getFullYear()+"년"+(Gong_Si.getMonth()+1)+"월"+Gong_Si.getDay()+"일 요금제 변경 가능";