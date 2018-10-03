import axios from 'axios';
import qs from 'qs-lite';


const parseQueryParamsToAPIQuery = () => {
	const query = {
		inDRS: true,
		accessFlag: 'P',
		limit: 15,
	};

	const queryParams = qs.parse(window.location.search.replace('?', ''));
	if (queryParams.page && queryParams.page >= 1) {
		query.start = (queryParams.page - 1) * query.limit;
	} else {
		query.start = 0;
	}

	if (queryParams.subject && queryParams.subject.length) {
		query.subject = queryParams.subject;
	}

	if (queryParams.dateFrom && queryParams.dateFrom.length) {
		query['dates.start'] = queryParams.dateFrom;
	}

	if (queryParams.dateTo && queryParams.dateTo.length) {
		query['dates.end'] = queryParams.dateTo;
	}

	if (queryParams.type && queryParams.type.length) {
		query['resourceType'] = queryParams.type;
	}

	if (queryParams.format && queryParams.format.length) {
		query['genre'] = queryParams.format;
	}

	if (queryParams.repository && queryParams.repository.length) {
		query['physicalLocation'] = queryParams.repository;
	}

	return query;
}

export const fetchDataList = async (slug) => {
	try {
		const query = parseQueryParamsToAPIQuery();

		const response = await axios.get(
			`https://api.lib.harvard.edu/v2/items.json?${qs.stringify(query)}`,
			{
				crossdomain: true,
			},
		);
		const data = await response.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const fetchDataDetail = async (id) => {
	try {
		const response = await axios.get(
			`https://api.lib.harvard.edu/v2/items.json?recordIdentifier=${id}`,
			{
				crossdomain: true,
			},
		);
		const data = await response.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}
