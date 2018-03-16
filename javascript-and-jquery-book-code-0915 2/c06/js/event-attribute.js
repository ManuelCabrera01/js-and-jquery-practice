function checkUserName (){
  var elMsg = document.getElementById('feedBack');
  var elUsername = document.getElementById('username');

  if(elUsername.value.length < 5){
    elMsg.textContent = "username must be 5 character or more";
  }else {
    elMsg.textContent = "";
  }
}
