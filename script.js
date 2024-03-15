document.getElementById("footer__sign").innerHTML = "&copy; " + new Date().getFullYear()+ " Miguel Ruz";

function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

const nav = document.querySelector("#headerUl");
const closeNav = document.querySelector(".main");

closeNav.addEventListener("click", function(){
   nav.classList.remove("_active");
})