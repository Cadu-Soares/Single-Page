const menuBtn = document.getElementById("menu-btn");

const sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function showNavBar(){
  if(sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
  }
  else{
    sideNav.style.right = "-250px"
  }
}