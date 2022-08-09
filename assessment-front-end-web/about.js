console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function hoverImage(evt) {
	evt.preventDefault();

	alert('You look nice today')
}

let duckImg = document.querySelector('#ducky')

duckImg.addEventListener('mouseover', hoverImage)

