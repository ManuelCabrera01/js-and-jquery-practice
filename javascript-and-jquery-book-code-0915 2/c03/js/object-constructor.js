var hotel = new  Object();
hotel.name='park';
hotel.romms= 120;
hotel.booked= 77;
hotel.checkAvailability = function(){
return this.rooms - this.booked;
};

var elName = document.getElementById('name');
elName.textContent = hotel.name;

var elRooms = document.getElementById('name');
elRooms.textContent = hotel.checkAvailability();
