import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import ItemListPage from '../../components/ItemListPage';
import userIsAdminQuery from '../../../users/graphql/queries/userIsAdmin';
import itemListQuery from '../../graphql/queries/list';

const ItemListPageContainer = props => {
	let userIsAdmin = false;
	let files = [];

	if (props.userIsAdminQuery && props.userIsAdminQuery.project) {
		userIsAdmin = props.userIsAdminQuery.project.userIsAdmin;
	}

	if (props.itemListQuery && props.itemListQuery.project) {
		files = props.itemListQuery.project.files;
	}

	let skip = 0;
	if (props.router.location.query.page) {
		skip = (props.router.location.query.page - 1) * 24;
	}

	return (
		<ItemListPage
			userIsAdmin={userIsAdmin}
			files={files}
			{...props.router.location.query}
			skip={skip}
		/>
	);
};

export default compose(
	userIsAdminQuery,
	itemListQuery,
	withRouter
)(ItemListPageContainer);
