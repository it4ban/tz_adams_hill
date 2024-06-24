const apiUrl = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters(page = 1, query = '', filters = {}) {
	let url = `${apiUrl}?page=${page}`;
	if (query) {
		url += `&name=${query}`;
	}

	for (const [key, value] of Object.entries(filters)) {
		if (value) {
			url += `&${key}=${value}`;
		}
	}

	const response = await fetch(url);
	const data = await response.json();
	return { characters: data.results, totalPages: data.info.pages };
}

async function fetchFilterOptions() {
	const response = await fetch(apiUrl);
	const data = await response.json();

	const uniqueStatuses = new Set(data.results.map((character) => character.status));
	const uniqueSpecies = new Set(data.results.map((character) => character.species));
	const uniqueTypes = new Set(data.results.map((character) => character.type).filter((type) => type));
	const uniqueGenders = new Set(data.results.map((character) => character.gender));

	return {
		statuses: Array.from(uniqueStatuses),
		species: Array.from(uniqueSpecies),
		types: Array.from(uniqueTypes),
		genders: Array.from(uniqueGenders),
	};
}

export { fetchCharacters, fetchFilterOptions };
