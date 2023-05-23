//your JS code here. If required.
let body = document.body;
let h1 = document.createElement("h1");
body.append(h1);
function resize(){
	h1.textContent = `Width:${window.innerWidth} and Height:${window.innerHeight}`;
}
