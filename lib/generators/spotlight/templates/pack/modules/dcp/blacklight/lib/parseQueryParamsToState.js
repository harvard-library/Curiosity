import qs from 'qs-lite';

const parseQueryParamsToState = () => {
	let searchTextInput = '';
	let dateFrom = 0;
	let dateTo = 0;
	let type = '';
	let repository = '';
	let format = '';

	const queryParams = qs.parse(window.location.search.replace('?', ''));
	if (queryParams.subject) {
		searchTextInput = queryParams.subject;
	}

	if (queryParams.dateFrom) {
		dateFrom = queryParams.dateFrom;
	}
	if (queryParams.dateTo) {
		dateTo = queryParams.dateTo;
	}

	if (queryParams.type) {
		type = queryParams.type;
	}

	if (queryParams.repository) {
		repository = queryParams.repository;
	}

	if (queryParams.format) {
		format = queryParams.format;
	}

	return {
		searchTextInput,
		dateFrom,
		dateTo,
		type,
		repository,
		format,
	};
}

export default parseQueryParamsToState;
