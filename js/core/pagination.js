import { fetchCharacters } from './api.js';
import { renderCharacters } from './render.js';
import { getFilters } from '../utils/utils.js';

let currentPage = 1;
let totalPages = 1;

const pagination = document.getElementById('navigation');

function renderPagination() {
	pagination.innerHTML = '';

	const maxButtons = 5;
	const half = Math.floor(maxButtons / 2);
	let startPage = Math.max(1, currentPage - half);
	let endPage = Math.min(totalPages, currentPage + half);

	if (currentPage <= half) {
		endPage = Math.min(totalPages, maxButtons);
	}

	if (currentPage + half >= totalPages) {
		startPage = Math.max(1, totalPages - maxButtons + 1);
	}

	if (startPage > 1) {
		const firstButton = createPageButton(1);
		pagination.appendChild(firstButton);

		const dots = document.createElement('span');
		dots.textContent = '...';
		pagination.appendChild(dots);
	}

	for (let i = startPage; i <= endPage; i++) {
		const button = createPageButton(i, i === currentPage);
		pagination.appendChild(button);
	}

	if (endPage < totalPages) {
		const dots = document.createElement('span');
		dots.textContent = '...';
		pagination.appendChild(dots);

		const lastButton = createPageButton(totalPages);
		pagination.appendChild(lastButton);
	}
}

function createPageButton(page, isActive = false) {
	const button = document.createElement('button');
	button.textContent = page;
	button.classList.add('page-button');
	if (isActive) {
		button.classList.add('active');
	}
	button.addEventListener('click', async () => {
		currentPage = page;
		const query = document.getElementById('search-input').value;
		const filters = getFilters();
		const { characters } = await fetchCharacters(currentPage, query, filters);
		renderCharacters(characters);
	});
	return button;
}

function updateTotalPages(pages) {
	totalPages = pages;
}

export { renderPagination, updateTotalPages, currentPage };
