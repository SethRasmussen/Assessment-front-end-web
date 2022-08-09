let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

function colorFunc(evt) {
     evt.preventDefault()

	alert('My favorite Color is Light Blue')
}

function placeFunc(evt) {
	evt.preventDefault();

	alert('My favorite Place is American Fork Canyon')
}

function ritualFunc(evt) {
	evt.preventDefault();

	alert('My favorite Ritual is brushing my teeth in the shower')
}

colorBtn.addEventListener('click', colorFunc)
placeBtn.addEventListener('click', placeFunc)
ritualBtn.addEventListener('click', ritualFunc)