//var APIKey: '7f275b00b7e879ab40ec03ca8ab5c95a';
//var APISecret: '8b820311b9369c910160da2c8ee3af5f';




/*
  $(document).ready(function(){
  var animal = "dog";
  $.getJSON("http://api.petfinder.com/breed.list?format=json&animal=" + animal +  "&key=7f275b00b7e879ab40ec03ca8ab5c95a&callback=?")
    .done(function(petApiData) { console.log(petApiData); })
    .fail(function(err) { alert('Error retrieving data!');})
});
/*breed list*/
*/


$(document).ready(function(){
$.getJSON('http://api.petfinder.com/shelter.find?format=json&animal=cat&key=7f275b00b7e879ab40ec03ca8ab5c95a&callback=?')
  .done(function(petApiData) { console.log(petApiData); })
  .fail(function(err) { console.log('Error retrieving data!');
});
});
