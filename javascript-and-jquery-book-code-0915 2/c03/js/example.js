// the script is created inside a immediately invoke funtion expression wich help protrect the scope of variables
(function(){
  // part one create a hotel objes and write out the offer detaills
  var hotel =  {
      name : 'Park',
      roomRate : 240,//amount in dollar
      discount :15,//porcentage of the discount
      offerPrice: function(){
      var offerRate = this.roomRate * (( 100 -this.discount )/ 100);
      return offerRate;
    }
};
var hotelName , roomRate, espetialRate;
hotelName = document.getElementById("hotelName");
roomRate = document.getElementById('roomRate');
espetialRate = document.getElementById('espetialRate');

hotelName.textContent = hotel.name;
roomRate.textContent = '$'+ hotel.roomRate.toFixed(2);
specialRate.textContent = '$'+ hotel.offerPrice();

// part toe calculate and write the expary detaills for the offerPrice

var expiryMsg ;
var today;
var elEnds;

function  offerExpires(today){
  //declare variable withing the function for local scope
  var weekFromToday, day , date , month , year, dayName, monthName;
  //add y7days time (added in milliseconds)
  weekFromToday = new Date(today.getTime()+7 *24*60*60*1000)  ;
dayName= ['sunday', 'monday','tuesday', 'wednsfay', ' thursday','friday','saturday', 'sunday'];
monthName = ['january','february','march','april','may','june','july','august',' septembre',' november',' december'];
//collect the part of the date to shoe on the page
day = dayName[weekFromToday.getDay()];
date = weekFromToday.getDate();
month = monthName[weekFromToday.getMonth()];
year = weekFromToday.getFullYear();
//create full message

expiryMsg = 'offer espire next';
expiryMsg += day + '<br/>('+date + ' '+month +' '+year+')';
return expiryMsg;

}

today = new Date();
elEnds =document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);






}());
