import React from 'react';
import { compose } from 'react-apollo';

import ItemMetaFieldItemList from '../../components/ItemMetaFieldItemList';
import metaItemListQuery from '../../graphql/queries/metaItemList';

const ItemMetaFieldItemListContainer = props => {
	let items = [];

	if (
		props.metaItemListQuery &&
		props.metaItemListQuery.project &&
		props.metaItemListQuery.project.items
	) {
		items = props.metaItemListQuery.project.items;
	}

	return <ItemMetaFieldItemList items={items} />;
};

export default compose(metaItemListQuery)(ItemMetaFieldItemListContainer);
