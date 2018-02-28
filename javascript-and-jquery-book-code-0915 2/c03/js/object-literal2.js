var hotel = {
  name:'park',
  rooms:'120',
  booked:'77',
  checkAvailability: function(){
    return this.rooms - this.booked;

  }

};
var elName = document.getEmentById('name');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
