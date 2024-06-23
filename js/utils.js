function getFilters() {
	return {
		status: document.getElementById('status').value,
		species: document.getElementById('species').value,
		type: document.getElementById('type').value,
		gender: document.getElementById('gender').value,
	};
}

export { getFilters };
