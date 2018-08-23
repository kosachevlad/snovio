window.addEventListener('DOMContentLoaded', () => {
	let addSocialBtn = document.querySelector('.social-button'),
		modal = document.querySelector('.modal'),
		closeModal = document.querySelector('.close-modal')

	addSocialBtn.addEventListener('click', () => {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	closeModal.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	})
})