var itemTwo = document.getElementeById('two');

var elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('pine nuts ' , 'kale');

itemTwo.fisrtChild.nodeValue = elText;
