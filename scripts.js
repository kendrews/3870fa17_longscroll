var canvas = document.getElementById("canvas");
var clouds = document.getElementById("clouds");
var cloud1 = document.getElementById("cloud1");

window.onscroll = function(){


  var y = window.pageYOffset;


  cloud1.style.top = 200 + y * -1;
  cloud2.style.top = 240 + y * -2;
  cloud3.style.top = 260 + y * -1;
  cloud4.style.top = 350 + y * -1.5;
  cloud5.style.top = 350 + y * -1;
  cloud6.style.top = 450 + y * -2;
  cloud7.style.top = 550 + y * -1;
  cloud8.style.top = 650 + y * -1;
  cloud9.style.top = 750 + y * -1;
  cloud10.style.top = 850 + y * -2;
  cloud11.style.top = 950 + y * -1.5;
  cloud12.style.top = 1050 + y * -2;
  cloud13.style.top = 1000 + y * -1;
  cloud14.style.top = 1100 + y * -1.5;
  cloud15.style.top = 1200 + y * -2;
  cloud16.style.top = 1350 + y * -2;
  cloud17.style.top = 1350 + y * -3;
  cloud18.style.top = 1350 + y * -3;

};
