const [open, view, del] = document.querySelectorAll('nav button');
const popup = document.querySelector('aside');
const ck = popup.querySelector('#ck');
const close = popup.querySelector('button');

open.addEventListener('click', () => {
	popup.style.display = 'block';
});

close.addEventListener('click', () => {
	popup.style.display = 'none';
});

function setCookie(name, value, expires) {
	let today = new Date();
	let duedate = today.getDate() + expires;
	today.setDate(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${today.toString()}`;
}
