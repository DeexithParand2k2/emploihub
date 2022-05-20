window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.documentElement.scrollTop <= 40 && screen.width>900) {
    document.getElementById("logo").style.width = "12%";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.boxShadow = "none";
  }
  else if(document.documentElement.scrollTop <= 40 && screen.width<=900) {
    document.getElementById("logo").style.width = "25%";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.boxShadow = "none";
  }
  else if(document.documentElement.scrollTop > 40 && screen.width<=900) {
    document.getElementById("logo").style.width = "12%";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.boxShadow = "none";
  } 
  else if(document.documentElement.scrollTop > 40){
    document.getElementById("logo").style.width = "7%";
    document.getElementById("navbar").style.opacity = "0.95";
    document.getElementById("navbar").style.boxShadow = "0px 2px 10px #d4d6c9";
  }
}
