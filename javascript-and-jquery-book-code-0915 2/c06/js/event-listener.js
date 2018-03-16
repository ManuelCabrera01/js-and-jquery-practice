function checkUsername(){
  var elMsg = document.getElementById('feedBack');
  if (this.value.length < 5 ){
    elMsg.textContent = 'username must be 5 character or more';

  }else{
    elMsg.textContent = "";
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);
