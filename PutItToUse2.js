var APIKey = "&key=7f275b00b7e879ab40ec03ca8ab5c95a&callback=?";
var staticData = "&output=basic";

$(document).ready(function(){
$("form").on("submit", function(event){
  event.preventDefault();
  var query = $(this).serialize();
  /*prints the query from the form to screen*/
  $("#query").append(query);
  /*get method*/
$.getJSON("//api.petfinder.com/pet.getRandom?format=json&" + query +  staticData + APIKey)
  .done( function(petApiData){
    var numPhotos = petApiData.petfinder.pet.media.photos.photo.length;

    for(var i = 0; i < numPhotos; i++){
    $.each(petApiData.petfinder.pet.media.photos.photo[i],  function (idx, val){
        if(idx === "$t")
          $("<img>").attr("src", val).appendTo("#pics");
    });
  };

    $.each(petApiData.petfinder.pet.contact.city, function (idx, val){
      $("#locationOut").append(val);
    });
    $("#locationOut").append(", ");
    $.each(petApiData.petfinder.pet.contact.state, function (idx, val){
      $("#locationOut").append(val);
    });
    $.each(petApiData.petfinder.pet.shelterId, function (idx, val){
      $("#shelterid").append(val);
    });
  $.each(petApiData.petfinder.pet.name, function (idx, val){
      $("#nameOut").append(val);
    });
    $.each(petApiData.petfinder.pet.contact.phone, function (idx, val){
      $("#phone").append(val);
    });
    $.each(petApiData.petfinder.pet.shelterPetId, function (idx, val){
      $("#petid").append(val);
    });
    $.each(petApiData.petfinder.pet.sex, function (idx, val){
      $("#gender").append(val);
    });
    $.each(petApiData.petfinder.pet.size, function (idx, val){
      $("#sizeOut").append(val);
    });
    $.each(petApiData.petfinder.pet.name, function (idx, val){
      $("#nameOut").append(val);
    });
    $.each(petApiData.petfinder.pet.age, function (idx, val){
      $("#ageOut").append(val);
    });
    $.each(petApiData.petfinder.pet.breeds.breed, function (idx, val){
      $("#breedOut").append(val);
    });
    $.each(petApiData.petfinder.pet.animal, function (idx, val){
      $("#animalOut").append(val);
    });
      $.each(petApiData.petfinder.pet.description, function (idx, val){
        $("#description").append(val);
      });
  console.log("success");
  console.log(petApiData);

});
});
});
