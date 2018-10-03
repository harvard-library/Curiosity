import React from 'react';
import { compose } from 'react-apollo';
import qs from 'qs-lite';

// graphql
import itemListQuery from '../../../../items/graphql/queries/list';

// component
import SpotlightSearchResults from '../../components/SpotlightSearchResults';


const SpotlightSearchResultsContainer = props => {
	const queryParams = qs.parse(window.location.search.replace('?', ''));
	const limit = 15;
	let itemsCount = 0;
	let total = 0;
	let start = 1;

	if (
		props.itemListQuery
		&& !props.itemListQuery.loading
		&& props.itemListQuery.exhibit
	) {
		itemsCount = props.itemListQuery.exhibit.items.records.length;
		total = props.itemListQuery.exhibit.items.count;
	}

	if (queryParams.page) {
		start = ((parseInt(queryParams.page, 10) - 1) * limit) + 1;
	}

	return (
		<SpotlightSearchResults
			itemsCount={itemsCount}
			total={total}
			start={start}
    />
	);
};

export default compose(
	itemListQuery,
)(SpotlightSearchResultsContainer);
