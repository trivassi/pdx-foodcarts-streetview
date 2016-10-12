var FoodCartMap = require('./../js/foodcart-app.js').foodCartModule;

var apiKey = require('./../.env').apiKey;


$(document).ready(function() {

var googleMapsScript = document.createElement('script');

googleMapsScript.type = 'text/javascript'
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key='+ apiKey;
googleMapsScript.async = true;
googleMapsScript.defer = true;

$("head").append(googleMapsScript);

var foodCartMap = new FoodCartMap();

setTimeout(function(){
  foodCartMap.initMap();
}, 1000);

});
