var elUsername =  document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUserName(minLength){

if (elUsername.value.length < 5){
  elMsg.textContent = "username must be "+minLength+ "  character or more";
}
  else{
    elMsg.textContent =" ";
}

}
if (elUsername.addEventListener){
  elUsername.addEventListener('blir', function(){
    checkUsername(5);
  },false);
} else {elUsername.attachEvent('onblur', function(){
  checkUsername(5);
});
}
