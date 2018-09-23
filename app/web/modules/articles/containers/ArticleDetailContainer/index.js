import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ArticleDetail from '../../components/ArticleDetail';
import articleDetailQuery from '../../graphql/queries/detail';
import articleListQuery from '../../graphql/queries/list';
import articleRemoveMutation from '../../graphql/mutations/remove';

class ArticleDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleRemove(articleId) {
		const { articleRemove, router } = this.props;

		articleRemove(articleId)
			.then(response => {
				router.replace('/articles');
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		let article = [];
		let userIsAdmin = false;

		if (this.props.articleQuery && this.props.articleQuery.project) {
			article = this.props.articleQuery.project.article;
			userIsAdmin = this.props.articleQuery.project.userIsAdmin;
		}

		return (
			<ArticleDetail
				{...article}
				userIsAdmin={userIsAdmin}
				handleRemove={this.handleRemove}
			/>
		);
	}
}

export default compose(
	articleDetailQuery,
	articleListQuery,
	articleRemoveMutation
)(ArticleDetailContainer);
