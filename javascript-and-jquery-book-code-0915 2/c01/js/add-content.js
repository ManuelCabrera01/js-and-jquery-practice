var today =  new Date();
var houtNow = today.getHours();
var greeting;

  if   (houtNow > 18) {
      greeting = "good mornig";
    } else if (houtNow > 12 ){
      greeting = "good aftermoon";
    }
    else if (houtNow > 0 ){
      greeting = "good morning";
    }
    else{
      greeting = 'wellcome';
    }
    document.write('<h3>' + greeting +" </h3>");
