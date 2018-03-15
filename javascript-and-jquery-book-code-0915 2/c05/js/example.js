var list = document.getElementByTagName('ul')[0];

var newItemLast = createElement('li');
var newTextLast = createTextNode('cream');
 newItemLast.appendChild('newTextLast');

 var newItemFirst = createElement('li');
 var newTextFirst= createTextNode('kale');
 newItemFirst.appendChild('newTextFirst');
 list.insetBefore(newItemFirst, list.fisrtChild);


 var listItems = document.querySelectorAll('li');

 var i ;
for (i =0; i< lastItem.length; i ++){
  listItems[i].className = "cool";
}
var heading = document.querySelector('h2');
var hedingText = heading.firstChild.nodeValue;
var totalItems = listItems.lenght;
var newHeading = headingText +' <span'> + totalItems + '</span>' ;
heading.innerHTML = newHeading;
