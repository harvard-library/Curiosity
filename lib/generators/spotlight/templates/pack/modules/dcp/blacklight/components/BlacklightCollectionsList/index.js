import React from 'react';
import BlacklightCollectionsListItem from '../BlacklightCollectionsListItem';

import './BlacklightCollectionsList.scss';

const BlacklightCollectionsList = ({content, collections}) => {

	return (
		<div>
			{ collections ?

				<div className="hl__blacklightBrowseCol__container">
					{collections.map((collection, i) => (
						<BlacklightCollectionsListItem
							key={collection.id}
							{...collection}
		        />
		      ))}
				</div>

			: '' }
		</div>

	) ;

}

export default BlacklightCollectionsList;
