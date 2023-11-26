const [open, view, del] = document.querySelectorAll('nav button');
const popup = document.querySelector('aside');
const ck = popup.querySelector('#ck');
const close = popup.querySelector('button');

document.cookie.indexOf('today=done') < 0 ? (popup.style.display = 'block') : (popup.style.display = 'none');
// -1 을 반환 : 쿠키가 없는걸 판단

// 쿠키 확인
view.addEventListener('click', () => console.log(document.cookie));

del.addEventListener('click', () => {
	setCookie('today', 'done', 0);
	alert('쿠키 삭제');
});

// 팝업 열기
open.addEventListener('click', () => {
	popup.style.display = 'block';
});

// 팝업 닫기
close.addEventListener('click', () => {
	if (ck.checked) setCookie('today', 'done', 10);
	popup.style.display = 'none';
});

//쿠키생성 함수
function setCookie(name, value, expires) {
	let now = new Date();
	// 현재 밀리세컨드 시간값에 1시간(1000 * 60 * 60) * expires
	let duedate = now.getTime() + 1000 * 60 * 60 * expires;
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}
