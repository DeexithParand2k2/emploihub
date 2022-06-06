window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.documentElement.scrollTop <= 40) {
    document.getElementById("navbar").style.background = "linear-gradient(to left,#777bac,#ebf2ff,#F9FBFF,#FFFFFF)"
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.boxShadow = "none";
  } 
  else if(document.documentElement.scrollTop > 40){
    document.getElementById("navbar").style.background = "white"
    document.getElementById("navbar").style.opacity = "0.90";
    document.getElementById("navbar").style.boxShadow = "0px 2px 10px #d4d6c9";
  }
}

$("#circle1").click(function(){
  var x = $("#box1").offset();
  document.documentElement.scrollTop = x.top-140;
  console.log(x.top);
});

$("#circle2").click(function(){
  var x = $("#box2").offset();
  document.documentElement.scrollTop = x.top-140;
  console.log(x.top);
});

$("#circle3").click(function(){
  var x = $("#box3").offset();
  document.documentElement.scrollTop = x.top-140;
  console.log(x.top);
});
