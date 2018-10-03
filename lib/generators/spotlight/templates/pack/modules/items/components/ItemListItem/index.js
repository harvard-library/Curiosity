import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _s from 'underscore.string';
import ReactPlayer from 'react-player';

import Tags from '../../../tags/components/Tags';

import './ItemListItem.css';

const ItemListItem = props => {
	const itemUrl = `/items/${props._id}/${props.slug}`;

	let viewer = <div />;
	let files = [];
	let file = null;
	let imageUrl = null;

	if (props.files && props.files.length) {
		files = props.files;
	}

	if (files.length) {
		file = files[0];

		const fileType = file.type || '';
		const isImage = fileType.slice(0, fileType.indexOf('/')) === 'image';

		if (isImage) {
			imageUrl = `//iiif.orphe.us/${file.name}/full/300,/0/default.jpg`;
			viewer = (
				<Link to={itemUrl}>
					<img src={imageUrl} alt={props.title} />
				</Link>
			);
		} else {
			viewer = (
				<Link to={itemUrl}>
					<ReactPlayer
						url={`https://s3.amazonaws.com/iiif-orpheus/${file.name}`}
						width="300"
						height="200"
						style={{
							background: '#424242'
						}}
					/>
				</Link>
			);
		}
	}

	return (
		<div className="itemListItem">
			{viewer}
			<Tags tags={props.tags} />
			<Link to={itemUrl}>
				<h3>{props.title}</h3>
			</Link>
			<p className="description">{_s.prune(props.description, 90)}</p>
		</div>
	);
};

ItemListItem.propTypes = {
	imageUrl: PropTypes.string,
	tags: PropTypes.array,
	title: PropTypes.string,
	slug: PropTypes.string,
	description: PropTypes.string
};

export default ItemListItem;
