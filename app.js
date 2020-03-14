const form = document.querySelector('.form-control');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkEmail();
});

function checkEmail() {
	const emailValue = email.value.trim();
	if (emailValue === '') {
		displayError(email, 'Email cannot be empty');
	} else if (!validEmail(emailValue)) {
		displayError(email, 'Please provide a valid Email address');
	} else {
		displaySuccess(email, 'Thanks for subscribing');
	}
}

function displayError(input, message) {
	const formItem = input.parentElement;
	const small = formItem.querySelector('small');

	formItem.classList = 'form-input error';
	small.innerText = message;
}

function displaySuccess(input, message) {
	const formItem = input.parentElement;
	const small = formItem.querySelector('small');

	formItem.classList = 'form-input success';
	small.innerText = message;
}

function validEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email);
}
