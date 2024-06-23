import { fetchCharacters } from './api.js';
import { renderCharacters } from './render.js';
import { renderPagination, updateTotalPages, currentPage } from './pagination.js';
//import { getFilters } from './utils.js';

const searchInput = document.getElementById('search-input');
const filterForm = document.getElementById('filter-form');

async function loadCharacters() {
	const query = searchInput.value;
	//const filters = getFilters();
	const { characters, totalPages } = await fetchCharacters(currentPage, query);
	renderCharacters(characters);
	updateTotalPages(totalPages);
	renderPagination();
}

async function addEventListeners() {
	searchInput.addEventListener('input', async () => {
		await loadCharacters();
	});

	// filterForm.addEventListener('submit', async (event) => {
	// 	await event.preventDefault();
	// 	await loadCharacters();
	// });
}

export { loadCharacters, addEventListeners };
