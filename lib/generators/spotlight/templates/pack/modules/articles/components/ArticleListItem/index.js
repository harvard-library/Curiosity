import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _s from 'underscore.string';

import Tags from '../../../tags/components/Tags';

import './ArticleListItem.css';

const ArticleListItem = props => {
	const articleUrl = `/articles/${props._id}/${props.slug}`;

	return (
		<div className="articleListItem">
			{props.imageUrl ? (
				<Link to={articleUrl}>
					<img src={props.imageUrl} alt={props.title} />
				</Link>
			) : (
				''
			)}
			<Tags tags={props.tags} />
			<Link to={articleUrl}>
				<h3>{props.title}</h3>
			</Link>
			<p className="description">{_s.prune(props.description, 90)}</p>
		</div>
	);
};

ArticleListItem.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	slug: PropTypes.string,
	description: PropTypes.string
};

export default ArticleListItem;
