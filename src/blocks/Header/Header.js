document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.Header__burger');
	const jsBurger = document.querySelector('.jsBurger');
	const html = document.getElementsByTagName('html');
	const body = document.getElementsByTagName('body');
	const menu = document.querySelector(".Header__menu")
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

	window.addEventListener('resize',()=>{
		const w = window.innerWidth;
		if(w<1301){
			menu.classList.add('container')
		}else{
			menu.classList.remove('container')
		}
	})
})
