let navLinks = document.getElementById("nav-links");

function showMenu(){
  navLinks.style.right = "0px";
}
function hideMenu(){
  navLinks.style.right = "-200px";
}

let year = new Date().getFullYear();
document.querySelector(".footer p").innerHTML = "© " + year + " VASANTHAA TEXTILESS";