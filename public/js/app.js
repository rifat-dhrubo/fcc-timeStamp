const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const value = input.value;
	const uri = form.action.concat(`/${value}`);
	form.action = uri;
	form.submit();
});
