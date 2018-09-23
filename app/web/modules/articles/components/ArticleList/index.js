import React from 'react';
import PropTypes from 'prop-types';

import NoResults from '../../../../components/pagination/NoResults';
import ArticleListItem from '../ArticleListItem';

import './ArticleList.css';

const ArticleList = ({ articles, horizontal }) => {
	const classes = [];

	if (horizontal) {
		classes.push('articlesListHorizontal');
	}

	return (
		<div className={`articlesList ${classes.join(' ')}`}>
			{articles.map((articleListItem, i) => (
				<ArticleListItem
					key={`${articleListItem.slug}-${i}`}
					{...articleListItem}
				/>
			))}

			{!articles || !articles.length ? (
				<NoResults message="No articles have been added to this collection yet." />
			) : (
				''
			)}
		</div>
	);
};

ArticleList.propTypes = {
	articles: PropTypes.array
};

ArticleList.defaultProps = {
	articles: []
};

export default ArticleList;
