import { renderPagination } from './pagination.js';

const charactersContainer = document.getElementById('root');

function renderCharacters(characters) {
	charactersContainer.innerHTML = '';
	characters.forEach((character) => {
		const characterCard = document.createElement('div');
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

export { renderCharacters };
