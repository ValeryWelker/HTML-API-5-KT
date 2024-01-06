var x = document.getElementById("your_location");

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  };
  
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
    x.innerHTML = "Ваши координаты:" + "<br>Широта:" + position.coords.latitude + "<br>Долгота:" + position.coords.longitude;
};
var x = document.getElementById("your_location");
getLocation();

var point = new YMaps.GeoPoint(position.coords.latitude, position.coords.longitude); // Координаты в Яндекс API
map.setCenter(point);