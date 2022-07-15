window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) && window.innerWidth > 975) {
    document.getElementById("header").className = "container head head-sticky";
    document.getElementById("headcol").className = "col-12 col-xxl-12 navmenu";
    document.getElementById("logo").src = "./img/header-logo-blue.png";
        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "#0006";
        
      }
  } else if(window.innerWidth > 975){
    document.getElementById("header").className = "container head head-fixed";
    document.getElementById("headcol").className = "col-12 col-xxl-12 navmenu";
    document.getElementById("logo").src = "./img/header-logo-white.png";
        let nodes = document.querySelectorAll(".mainlinks");
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.color = "#fff";
  }
} else
if ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) && window.innerWidth < 976) {
  document.getElementById("header").className = "container head head-sticky";
  document.getElementById("headcol").className = "col-12 col-xxl-12 navmenu";
  document.getElementById("logo").src = "./img/header-logo-blue.png";
  document.getElementById("hamb").className = "hamb-line-dark";

} else if(window.innerWidth < 976){
  document.getElementById("header").className = "container head head-fixed";
  document.getElementById("headcol").className = "col-12 col-xxl-12 navmenu";
  document.getElementById("logo").src = "./img/header-logo-white.png";
  document.getElementById("hamb").className = "hamb-line";

}
}