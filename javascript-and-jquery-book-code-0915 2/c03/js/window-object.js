// in this exampleof the properties and methos that the window-object has

var msg = '<h2>browser window </h2> <p> wiidth:' + window.innerWidth+ '</p>';
msg += '<p>height:' + window.innerHeight + '</p>';
msg += '<h2> history</h2><p> items: '+ window.history.length+'</p>';
msg += '</h2> screen</h2> <p> width:'+ window.screen.width+'</p>';
var el = document.getElementById('info');
el.innerHTML= msg;
alert('current page :'+ window.location);
