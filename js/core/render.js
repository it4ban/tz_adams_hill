import { renderPagination } from './pagination.js';

const charactersContainer = document.getElementById('root');

function renderCharacters(characters) {
	charactersContainer.innerHTML = '';
	characters.forEach((character) => {
		const characterCard = document.createElement('a');
		characterCard.href = `./character.html?url=${character.url}`;
		characterCard.classList.add('character-card');
		characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Type: ${character.type || 'Unknown'}</p>
            <p>Gender: ${character.gender}</p>
        `;
		charactersContainer.appendChild(characterCard);
	});

	renderPagination();
}

function renderFilterOptions(options) {
	const statusSelect = document.getElementById('status');
	const speciesSelect = document.getElementById('species');
	const typeSelect = document.getElementById('type');
	const genderSelect = document.getElementById('gender');

	options.statuses.forEach((status) => {
		const option = document.createElement('option');
		option.value = status.toLowerCase();
		option.textContent = status;
		statusSelect.appendChild(option);
	});

	options.species.forEach((species) => {
		const option = document.createElement('option');
		option.value = species.toLowerCase();
		option.textContent = species;
		speciesSelect.appendChild(option);
	});

	options.types.forEach((type) => {
		const option = document.createElement('option');
		option.value = type.toLowerCase();
		option.textContent = type;
		typeSelect.appendChild(option);
	});

	options.genders.forEach((gender) => {
		const option = document.createElement('option');
		option.value = gender.toLowerCase();
		option.textContent = gender;
		genderSelect.appendChild(option);
	});
}

export { renderCharacters, renderFilterOptions };
