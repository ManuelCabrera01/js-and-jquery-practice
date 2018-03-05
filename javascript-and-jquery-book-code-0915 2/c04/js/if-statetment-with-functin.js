var score = 75;
var msg = "";

function congratulate(){
  msg += "contugration";
}

if (score >= 50){
  congratulate();
  msg += "pocced to the next roud";

}

var el = document.getElementById('answer');
el.textContent = msg;
