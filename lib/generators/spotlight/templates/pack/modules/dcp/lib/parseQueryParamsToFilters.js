const parseQueryParamsToFilters = (params) => {
	const filters = [];

	delete params.page;
	delete params.skip;


	for (const prop in params) {
		filters.push({
			key: prop,
			value: params[prop],
		});
	}

	return filters;
};

export default parseQueryParamsToFilters;
