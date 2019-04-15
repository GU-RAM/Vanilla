
document.querySelector('#to-right');
document.querySelector('#to-left');
let images = document.querySelectorAll('img');
let i = 1;

document.querySelector('#to-right').addEventListener('click', () => {
	if (i < 2) {
		me();
		i+= 1;
        images[i].classList.add('active');
   } 
});

document.querySelector('#to-left').addEventListener('click', () => {
	if (i > 0) {
		me();
		i -= 1;
        images[i].classList.add('active');
   } 
});

function me() {
	images[i].classList.remove('active');
};