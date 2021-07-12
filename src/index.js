import '../styles/index.css';

function loadForm() {
	const button = document.querySelector('.button');
	button.addEventListener('click', addPerson);
}

function addPerson() {
	const inputs = document.querySelectorAll('.menu__input');
	const name = inputs.item(0).value;
	const gb = inputs.item(1).value;
	document.querySelector('.card').innerHTML += `
	<div class="card__record record">
        <div class="record__name">${name}</div>
        <div class="record__GB">${gb}</div>
      </div>`;
}

loadForm();
