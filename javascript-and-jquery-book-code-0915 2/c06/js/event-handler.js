function checkUsername (){
  var elMsg = document.getElementById('feedBack');
  if (this.value.length < 5 ){
    elMsgTextContent = "username must be 5 character or more"
  }else{
    elMsg = " ";
  }
}
var elUsername= document.getElementById('username');
elUsername.onblur = checkUsername; 
