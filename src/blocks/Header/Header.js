document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.Header__burger');
	const jsBurger = document.querySelector('.jsBurger');
	const html = document.getElementsByTagName('html');
	const body = document.getElementsByTagName('body');
	const menu = document.querySelector(".Header__menu");
	const content = document.querySelector(".Header__content");
	const btns = document.querySelector(".Header__right");
	const w = window.innerWidth;

	if (burger) {
		burger.addEventListener('click', function () {
			jsBurger.classList.toggle('jsBurgerOpen');
			menu.classList.toggle('active');
			html[0].classList.toggle('lock');
			body[0].classList.toggle('lock');
		});
	}
	if(w<1301){
		menu.classList.add('container')
	}else{
		menu.classList.remove('container')
	}

	if(w<768){
		menu.append(btns)
	}else{
		content.append(btns)
	}

	window.addEventListener('resize',()=>{
		const burger = document.querySelector('.Header__burger');
		const jsBurger = document.querySelector('.jsBurger');
		const html = document.getElementsByTagName('html');
		const body = document.getElementsByTagName('body');
		const menu = document.querySelector(".Header__menu");
		const content = document.querySelector(".Header__content");
		const btns = document.querySelector(".Header__right");
		const w = window.innerWidth;
		if(w<768){
			menu.append(btns)
		}else{
			content.append(btns)
		}
		if(w<1301){
			menu.classList.add('container')
		}else{
			menu.classList.remove('container')
		}
	})
})
