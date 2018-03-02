var today = new Date();
var year = today.getFullYear();

var el = document.detElementById('footer');
el.innerHTML = '<p>copyright &Copy;' +year+'</p>;'
