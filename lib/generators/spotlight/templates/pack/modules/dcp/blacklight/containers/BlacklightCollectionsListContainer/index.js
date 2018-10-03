import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import collectionsQuery from '../../graphql/queries/collections';
import BlacklightCollectionsList from '../../components/BlacklightCollectionsList';



const BlacklightCollectionsListContainer = props => {

	let collections = [];

	if (
			props.collectionsQuery
			&& props.collectionsQuery.exhibits
		) {
		collections = props.collectionsQuery.exhibits;
	}

	return (
		<BlacklightCollectionsList
			collections={collections}
			{...props}
		/>
	);
};

export default compose(
	collectionsQuery,
	withRouter,
)(BlacklightCollectionsListContainer);
