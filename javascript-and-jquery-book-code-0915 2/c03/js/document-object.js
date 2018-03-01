var msg = '</p> <b> page tittle: </b>' + document.tittle + '<br/>';
msg +='<b> page address :</b>' + document.URL+ '<br />';
msg += '<b> last modified :</b>'+ document.lastModified + '< br />';

var el = document.getElementById('footer');
el.innerHTML = msg;
