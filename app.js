const gridContainer = document.getElementById('grid-container')
let canvasSize = 500
let pixelAmount = 10

function draw(amount, size){ 
	gridContainer.style.width = size + "px"
	gridContainer.style.height = size + "px"
	console.log(size/amount)
	for (let i = 0; i < Math.pow(amount, 2); i++) {
		let newGridBox = document.createElement("div")
		newGridBox.classList.add("gridbox")
		gridContainer.appendChild(newGridBox)
		newGridBox.style.width = size / amount + "px"
		newGridBox.style.height = size / amount + "px"
		newGridBox.addEventListener("click", () => {
			newGridBox.style.backgroundColor = 'black';
		})
	}	
}

function reset(){
	let gridBoxes = Array.from(document.getElementsByClassName('gridbox'))
	gridBoxes.forEach(element => {
		element.remove()
	})
	draw(pixelAmount, canvasSize)
}

function adjustCanvas(){
	canvasSize = prompt("Enter new size of canvas in pixels")
	if(canvasSize <= 0){
		canvasSize = 100
		alert('Invalid canvas size. Size defaulted to 100')
	}
	else {
		reset()
	}
	//draw(pixelAmount, canvasSize)
}

function adjustPixels() {
	pixelAmount = prompt("Enter new amount of pixels you would like along each side")
	if(pixelAmount/canvasSize > 1){
		pixelAmount = 1
		alert("Invalid pixel size: Defaulted to 1")
	}
	else{
		reset()
	}
}

draw(pixelAmount, canvasSize)


