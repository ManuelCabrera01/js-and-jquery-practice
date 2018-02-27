var subtotal = (13 + 4) * 5;
var shippin= 0.5 *(13 + 1);
var tortal = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent= subtotal;

 var elShip = document.getElementById('shipping');
 elShip.textContent = shipping;

 var elTotal= document.getElementById('total');
 elTotal.textContent = total;
