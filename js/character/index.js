import { getUrlLocation } from '../utils/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
	const url = new URL(location.href).searchParams;

	const characterData = await getUrlLocation(url.get('url'));
	renderCharacterData(characterData);
});

function renderCharacterData(characterData) {
	const character = document.querySelector('#root');

	character.innerHTML = `
        <div class="character__card">
            <img src="${characterData.image}" alt="${characterData.name}">
            <h2>${characterData.name}</h2>
            <p>${characterData.status}</p>
            <p>${characterData.species}</p>
            <p>${characterData.type}</p>
            <p>${characterData.gender}</p>
            <p>${characterData.origin.name}</p>
            <p>${characterData.location.name}</p>
            <a href="/index.html">Назад</a>
        </div>
    `;
}
