function FoodCartMap (){

}



FoodCartMap.prototype.initMap = function() {

  var alderPod = {lat: 45.5208161, lng: -122.6805825};

  var panorama = new google.maps.StreetViewPanorama(document.getElementById('map'), {
    position: alderPod,
    heading: 300,
    pitch: 0
  });


};

exports.foodCartModule = FoodCartMap;
