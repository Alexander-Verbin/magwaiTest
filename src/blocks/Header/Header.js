document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.Header__burger');
	const jsBurger = document.querySelector('.jsBurger');
	//const navbar = document.querySelector('.Navbar')
	const html = document.getElementsByTagName('html');
	const body = document.getElementsByTagName('body');
	const logo = document.querySelector(".Header__logo")
	const w = window.innerWidth;
	const btnScroll = document.getElementsByClassName('jsBtnScroll');
	const sectionTwo = document.querySelector('.SectionTwo')

	if (burger) {
		burger.addEventListener('click', function () {
			jsBurger.classList.toggle('jsBurgerOpen');
			//navbar.classList.toggle('active');
			html[0].classList.toggle('lock');
			body[0].classList.toggle('lock');
		});
	}
	;
})
