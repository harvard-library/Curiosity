import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import collectionsQuery from '../../graphql/queries/collections';
import HomeCollectionHighlightsList from '../../components/BlacklightHome/sections/HomeCollectionHighlightsList';



const HomeCollectionHighlightsContainer = props => {

	let collections = [];


	if (
				props.collectionsQuery
			&& props.collectionsQuery.exhibits
		) {
		collections = props.collectionsQuery.exhibits;
	}



	return (
		<HomeCollectionHighlightsList
			collections={collections}
			{...props}
		/>
	);
};

export default compose(
	collectionsQuery,
	withRouter,
)(HomeCollectionHighlightsContainer);
