import React from 'react';

import ItemListItem from '../ItemListItem';

import './ItemMetaFieldItemList.css';

const ItemMetaFieldItemList = ({ items }) => {
	return (
		<div className="itemMetaFieldItemList">
			{items.map((listItem, i) => (
				<ItemListItem key={`${listItem.slug}-${i}`} {...listItem} />
			))}
		</div>
	);
};

export default ItemMetaFieldItemList;
