var button = document.getElementById("navButton");
var basic = document.getElementById("basic");
var basic2 = document.getElementById("basic2");
var setup = document.getElementById("setup");
var use1 = document.getElementById("use1");
var use2 = document.getElementById("use2");


button.addEventListener("click", function(event){
  basic.addEventListener("click", function(event){
    window.location.href = "https://spiffikay.github.io/TheBasics.html";
  });
  basic2.addEventListener("click", function(event){
    window.location.href = "https://spiffikay.github.io/TheBasics2.html";
  });
  setup.addEventListener("click", function(event){
    window.location.href = "https://spiffikay.github.io/SetItUp.html";
  });
  use1.addEventListener("click", function(event){
    window.location.href = "https://spiffikay.github.io/PutItToUse.html";
  });
  use2.addEventListener("click", function(event){
      window.location.href = "https://spiffikay.github.io/PutItToUse2.html";
  });
});
