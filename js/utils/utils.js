function getFilters() {
	return {
		status: document.getElementById('status').value,
		species: document.getElementById('species').value,
		type: document.getElementById('type').value,
		gender: document.getElementById('gender').value,
	};
}

async function getUrlLocation(url) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}

export { getFilters, getUrlLocation };
