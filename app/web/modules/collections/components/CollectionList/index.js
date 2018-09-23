import React from 'react';
import PropTypes from 'prop-types';

import CollectionListItem from '../CollectionListItem';

import './CollectionList.css';

const CollectionList = ({ collections }) => (
	<div className="collectionsList">
		{collections.map((listItem, i) => (
			<CollectionListItem key={`${listItem.slug}-${i}`} {...listItem} />
		))}

		{!collections || !collections.length ? (
			<div className="collectionsListNoResults">
				<p>There are no collections for this project yet.</p>
			</div>
		) : (
			''
		)}
	</div>
);

CollectionList.propTypes = {
	collections: PropTypes.array
};

CollectionList.defaultProps = {
	collections: []
};

export default CollectionList;
