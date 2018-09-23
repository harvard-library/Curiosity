import React from 'react';
import { compose } from 'react-apollo';

import ArticleListPage from '../../components/ArticleListPage';
import userIsAdminQuery from '../../../users/graphql/queries/userIsAdmin';
import articlesQuery from '../../graphql/queries/list';

const ArticleListPageContainer = props => {
	let userIsAdmin = false;
	let files = [];

	if (props.userIsAdminQuery && props.userIsAdminQuery.project) {
		userIsAdmin = props.userIsAdminQuery.project.userIsAdmin;
	}

	if (props.articleListQuery && props.articleListQuery.project) {
		files = props.articleListQuery.project.files;
	}

	return <ArticleListPage userIsAdmin={userIsAdmin} files={files} />;
};

export default compose(
	userIsAdminQuery,
	articlesQuery
)(ArticleListPageContainer);
