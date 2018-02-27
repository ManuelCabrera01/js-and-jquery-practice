var inStock = true;
var shipping = false;

/* some otther processing might go here that change the value of those varibles
to other diferen*/

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
var elShip = document.getElementById("shipping");

elStock.className = inStock;
elShip.className = shipping;
