var list = document.getElementByTagName('ul')[0];

var newItemLast = createElement('li');
var newTextLast = createTextNode('cream');
 newItemLast.appendChild('newTextLast');

 var newItemFirst = createElement('li');
 var newTextFirst= createTextNode('kale');
 newItemFirst.appendChild('newTextFirst');
 list.insetBefore(newItemFirst, list.fisrtChild);
