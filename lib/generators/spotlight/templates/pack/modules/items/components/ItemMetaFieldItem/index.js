import React from 'react';

import ItemMetaFieldItemListContainer from '../../containers/ItemMetaFieldItemListContainer';

import './ItemMetaFieldItem.css';

const ItemMetaFieldItem = ({ label, value }) => {
	let items = [];
	let itemIds = [];

	if (value) {
		items = JSON.parse(value);
		items.forEach(item => {
			itemIds.push(item._id);
		});
	}

	return (
		<div className="itemMetaField">
			<label>{label}</label>
			<ItemMetaFieldItemListContainer ids={itemIds} />
		</div>
	);
};

export default ItemMetaFieldItem;
