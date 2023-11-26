const [view, del] = document.querySelectorAll('nav button');
const lastTime = 2;

if (document.cookie.indexOf('today=done') < 0) {
	createPop({ wid: 600, bg: 'pink', lastTime: lastTime });
}

//쿠키 확인
view.addEventListener('click', () => console.log(document.cookie));

del.addEventListener('click', () => {
	setCookie('today', 'done', 0);
	alert('쿠키 삭제');
});

//쿠키생성 함수
function setCookie(name, value, expires) {
	let now = new Date();
	//현재 밀리세컨드 시간값에 1시간(1000*60*60) * expires
	let duedate = now.getTime() + 1000 * 60 * 60 * expires;
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}

//팝업생성 함수
function createPop({ wid = 400, bg = '#ddd', lastTime = 24 }) {
	const aside = document.createElement('aside');
	aside.style.width = wid + 'px';
	aside.style.backgroundColor = bg;

	const tags = `
    <div class="con"></div>
    <div class="controls">
      <p>
        <input type="checkbox" id="ck">
        <label for="ck">${lastTime}시간동안 보지 않기</label>
      </p>
      <button>CLOSE</button>
    </div>
  `;
	aside.innerHTML = tags;
	document.body.append(aside);

	const close = document.querySelector('aside button');
	const ck = document.querySelector('aside #ck');

	//팝업 닫기
	close.addEventListener('click', () => {
		if (ck.checked) setCookie('today', 'done', lastTime);
		document.querySelector('aside').remove();
	});
}
