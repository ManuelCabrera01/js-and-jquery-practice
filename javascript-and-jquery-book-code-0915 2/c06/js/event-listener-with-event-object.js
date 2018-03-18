function checkLength(e, minLength){
  var el , elMsg;
if(!e){
  e = window.event;
}
el = e.targuet || e.srcElement;
elMsg = el.nextSibiling;
if (el.value.length< minLength){
  elMsg = 'username must be '+ minLength+'or longer';
}else{
  elMsg = " ";
    }
}
var elUsename = document.getElementById('username');
if (elUsrenamr.addEventListener){
  elUsername.addEventListener('blur', function(e){
    checkLength(e,5);
  }, false);

}else{
  elUsername.attachEvent('onblur', function(e){
    checkLength(e,5);
  });
}
