var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right,"
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	//adds text content to the page
}

color1.addEventListener("input", setGradient);

//NOTE: Callback functions 
// *Do not need to call the function. No need for () to call.
// The input event triggers the function..
// Known as a callback function

color2.addEventListener("input", setGradient);



