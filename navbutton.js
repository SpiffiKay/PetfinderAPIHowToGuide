var button = document.getElementById("navButton");
var basic = document.getElementById("basic");
var setup = document.getElementById("setup");
var use1 = document.getElementById("use1");
var use2 = document.getElementById("use2");

button.addEventListener("click", function(event){
  basic.addEventListener("click", function(event){
    window.location = "https://spiffikay.github.io/TheBasics.html";
  });
  setup.addEventListener("click", function(event){
    console.log("setup!");
  });
  use1.addEventListener("click", function(event){
    console.log("use1!");
  });
  use2.addEventListener("click", function(event){
    console.log("use2!");
  });
});
