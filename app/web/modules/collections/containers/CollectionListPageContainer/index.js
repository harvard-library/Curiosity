import React from 'react';
import { compose } from 'react-apollo';

import CollectionListPage from '../../components/CollectionListPage';
import collectionsQuery from '../../graphql/queries/list';
import userIsAdminQuery from '../../../users/graphql/queries/userIsAdmin';

const CollectionListPageContainer = props => {
	let userIsAdmin = false;
	let files = [];

	if (props.userIsAdminQuery && props.userIsAdminQuery.project) {
		userIsAdmin = props.userIsAdminQuery.project.userIsAdmin;
	}

	if (props.collectionListQuery && props.collectionListQuery.project) {
		files = props.collectionListQuery.project.files;
	}

	return <CollectionListPage userIsAdmin={userIsAdmin} files={files} />;
};

export default compose(
	userIsAdminQuery,
	collectionsQuery
)(CollectionListPageContainer);
