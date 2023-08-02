const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	alert(`Você será emviado para se inscrever ${name}! Enviaremos um email de confirmação para ${email}.`);
});
