var firstItem = document.getElementById('one');
var showTextCotent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent:' + showTextCotent + '</p>';
msg += '<p>innerText:'+ showInnerText + '</p>';

var el= document.getElementById('scriptResult');
el.innerText = msg;

fisrtItem.textContent = 'sourduogh bread';
