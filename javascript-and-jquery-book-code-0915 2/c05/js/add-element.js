var elNew = document.createElement('li');

var newText = document.createNodeText('quinoa');

elNew.apendChild(newText);

var position = document.getElementByTagName('ul')[0];

position.apendChild(elNew);
