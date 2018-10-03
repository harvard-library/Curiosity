import React from 'react';
import { compose } from 'react-apollo';

import ArticleList from '../../components/ArticleList';
import articlesQuery from '../../graphql/queries/list';

class ArticleListContainer extends React.Component {
	render() {
		let articles = [];

		if (this.props.articleListQuery && this.props.articleListQuery.project) {
			articles = this.props.articleListQuery.project.articles;
		}

		return <ArticleList articles={articles} />;
	}
}

export default compose(articlesQuery)(ArticleListContainer);
