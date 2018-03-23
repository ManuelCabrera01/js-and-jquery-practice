function getTarget(e){
  if(!e){
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e){
  var targuet , elParent, elGranparent;
  targuet = getTarget(e);
  elParent = targuet.parentNode;
  elGranparent =targuet.parentNode.parentNode;
  elGranparent.removeChild(elParent);

  if (e.preventDefault){
    e.preventDefault();

  }else{
    e.returnValue = false;
  }
}
var el = document.getElementById('shoppingList');
if (e.addEventListener){
  e.addEventListener('click', function(e){
    itemDone(e);
  },  false);
}else{
  el.attachEvent('onclick', function(e){
    itemDone(e);
  });
}
