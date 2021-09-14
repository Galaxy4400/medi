window.onload = function () {

	document.addEventListener('click', documentActions);

	function documentActions(e) {
		let target = e.target;

		// ======= salons menu =======
		if (target.classList.contains('salons__btn')) {
			if (!isMobile.any()) {
				target.classList.toggle('_hover');
			} else {
				target.classList.toggle('_active');
			}
			target.parentElement.querySelector('.salons__list').classList.toggle('_active');
		}

		if (!target.closest('.salons') && document.querySelectorAll('.salons').length > 0) {
			document.querySelector('.salons__btn').classList.remove('_hover');
			document.querySelector('.salons__btn').classList.remove('_active');
			document.querySelector('.salons__list').classList.remove('_active');
		}
	}

}