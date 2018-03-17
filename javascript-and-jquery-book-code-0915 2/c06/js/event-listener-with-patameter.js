var elUsename= document.getElementById('username');
var elMsg = document.getElementById('feedBack');
 function checkUsername (minLength){
   if(elUsername.value.length < minLength){
     elMsg.textContent = 'Username must be al ' + minLength + 'charactes ort more';
   }  else {
       elMsg.textContent = " ";
   }
 }
 elSusername.addEventListener ('blur', function() {
   checkUsername(5);
 },false);
 
