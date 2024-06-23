import { loadCharacters, loadFilterOptions, addEventListeners } from './events.js';

document.addEventListener('DOMContentLoaded', async () => {
	loadFilterOptions();
	await loadCharacters();
	await addEventListeners();
});
