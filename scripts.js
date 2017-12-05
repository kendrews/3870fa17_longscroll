var canvas = document.getElementById("canvas");
var clouds = document.getElementById("clouds");
var y = window.pageYOffset;

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  cloud1.style.top = 1000 + y * -2 + "px";
  cloud2.style.top = 2000 + y * -1.5 + "px";
  cloud3.style.top = 3000 + y * -1.5 + "px";
  cloud4.style.top = 4000 + y * -1.5 + "px";
  cloud5.style.top = 5000 + y * -1 + "px";
  cloud6.style.top = 6500 + y * -1.5 + "px";
  cloud7.style.top = 7000 + y * -.5 + "px";
  cloud8.style.top = 8000 + y * -.5 + "px";
  cloud9.style.top = 10000 + y * -.5 + "px";
  cloud10.style.top = 10500 + y * -.5 + "px";
  cloud11.style.top = 11000 + y * -1 + "px";

};
