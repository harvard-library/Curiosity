import React from 'react';

import ItemRelated from '../../components/ItemRelated';


const ItemRelatedContainer = props => {
	const relatedItems = [
		{
			id: 1,
			title: "Sample Title 1",

		},
		{
			id: 2,
			title: "Sample Title 2",
		},
		{
			id: 3,
			title: "Sample Title 3",
		}

	];

	/*if (
    props.metaItemListQuery
    && props.metaItemListQuery.project
    && props.metaItemListQuery.project.items
  ) {
		items = props.metaItemListQuery.project.items;
	}*/

	return (
		<div className="hl__itemDetail__relatedItemsContainer">
			{relatedItems.map((relatedItem, i) =>
				<ItemRelated
					key={relatedItem.id}
					{...relatedItem}
        />
      )}
		</div>




	);
};

export default ItemRelatedContainer;
