import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './ArticleTitle.css';

const ArticleTitle = ({ title, editLink, handleRemove }) => (
	<div className="articleTitleOuter">
		<h1 className="articleTitle">{title}</h1>
		{editLink ? (
			<Link to={editLink} className="articleTitleLink">
				Edit
			</Link>
		) : (
			''
		)}
		{handleRemove ? (
			<button
				onClick={handleRemove}
				className="articleTitleLink articleTitleLinkRemove"
			>
				Remove
			</button>
		) : (
			''
		)}
	</div>
);

ArticleTitle.propTypes = {
	title: PropTypes.string,
	showEditLink: PropTypes.bool
};

ArticleTitle.defaultProps = {
	title: '',
	showEditLink: false
};

export default ArticleTitle;
