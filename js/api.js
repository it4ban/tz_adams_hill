const apiUrl = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters(page = 1, query = '') {
	let url = `${apiUrl}?page=${page}`;
	if (query) {
		url += `&name=${query}`;
	}
	// for (const [key, value] of Object.entries(filters)) {
	// 	if (value) {
	// 		url += `&${key}=${value}`;
	// 	}
	// }

	const response = await fetch(url);
	const data = await response.json();
	return { characters: data.results, totalPages: data.info.pages };
}

export { fetchCharacters };
