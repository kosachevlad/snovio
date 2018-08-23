'use strict';

window.addEventListener('DOMContentLoaded', function () {
	var addSocialBtn = document.querySelector('.social-button'),
	    modal = document.querySelector('.modal'),
	    closeModal = document.querySelector('.close-modal');

	addSocialBtn.addEventListener('click', function () {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	closeModal.addEventListener('click', function () {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	});
});