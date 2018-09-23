import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prune } from 'underscore.string';

// import Tags from '../../../tags/components/Tags';
import './CollectionListItem.css';

const CollectionListItem = props => {
	const collectionUrl = `/collections/${props._id}/${props.slug}`;
	let thumbnail = null;
	if (props.coverImage) {
		thumbnail = `https://iiif.orphe.us/${
			props.coverImage
		}/full/210,/0/default.jpg`;
	}

	return (
		<div className="collectionListItem">
			{props.coverImage ? (
				<div className="collectionListItemImage">
					<Link to={collectionUrl}>
						<img alt={props.title} src={thumbnail} />
					</Link>
				</div>
			) : (
				''
			)}
			<div
				className={`
					collectionListItemBackground
					${props.coverImage ? 'collectionListItemBackgroundWithImage' : ''}
				`}
			>
				<div className="collectionCount">{props.itemsCount} items</div>
				<Link to={collectionUrl}>
					<h3>{props.title}</h3>
				</Link>
				<p>{prune(props.description, 90)}</p>
				<Link to={collectionUrl} className="collectionLink">
					<span className="collectionLinkLabel">View the collection</span>
					<i className="collectionLinkIcon mdi mdi-chevron-right" />
				</Link>
			</div>
		</div>
	);
};

CollectionListItem.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	coverImage: PropTypes.string
};

CollectionListItem.defaultProps = {
	slug: '',
	title: '',
	description: '',
	coverImage: null,
	itemsCount: 0
};

export default CollectionListItem;
