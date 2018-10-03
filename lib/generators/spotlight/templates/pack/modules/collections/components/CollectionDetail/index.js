import React from 'react';
import PropTypes from 'prop-types';

import CollectionCover from '../CollectionCover';
import CollectionDescription from '../CollectionDescription';
import ItemList from '../../../items/components/ItemList';
import Pagination from '../../../../components/pagination/Pagination';

import './CollectionDetail.css';

const CollectionDetail = props => (
	<div>
		<CollectionCover
			title={props.title}
			coverImage={props.coverImage}
			coverLink={
				props.userIsAdmin
					? `/collections/${props._id}/${props.slug}/edit`
					: null
			}
			coverLinkText={props.userIsAdmin ? 'Edit' : null}
			handleRemove={
				props.userIsAdmin ? props.handleRemove.bind(this, props._id) : null
			}
		/>
		{props.description ? (
			<CollectionDescription description={props.description} />
		) : (
			''
		)}
		<ItemList items={props.items} />
		<Pagination total={props.itemsCount} limit={18} page={0} />
	</div>
);

CollectionDetail.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	slug: PropTypes.string,
	coverImage: PropTypes.string,
	description: PropTypes.string,
	items: PropTypes.array
};

CollectionDetail.defaultProps = {
	_id: '',
	title: '',
	slug: '',
	coverImage: '',
	description: '',
	items: [],
	itemsCount: 0
};

export default CollectionDetail;
