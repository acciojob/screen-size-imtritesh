//your JS code here. If required.
let div = document.querySelector("#sizeInfo");
let h1 = document.createElement("h1");
function resize(){
	h1.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
	div.append(h1);
}
