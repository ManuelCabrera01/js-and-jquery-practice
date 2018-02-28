var greeting = 'howdy';
var name = 'Molly';
var message = ".  please check your order";
var welcome = greting + name + message;

const sing = 'Montage house';
const tiles = sign.length;
const subtotal = tiles *5;
const shipping = 7;
const grandTotal = subtotal + shipping;

var el = document.getElementById('greeting');
el.textContent = sign;

var elShipping = document.getElementById(' shipping');
elShipping.textContent= shipping;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSign = document.getElementById('sign');
elSign.textContent = sign;

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = subtotal;

var elGrandTotal = document.getElementById('grrandTotal');
elTotal.textContnt = grandTotal;
