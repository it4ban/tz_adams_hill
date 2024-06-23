import { loadCharacters, addEventListeners } from './events.js';

document.addEventListener('DOMContentLoaded', async () => {
	await loadCharacters();
	await addEventListeners();
});
