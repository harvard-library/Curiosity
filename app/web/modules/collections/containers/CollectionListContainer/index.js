import React from 'react';
import { compose } from 'react-apollo';

import CollectionList from '../../components/CollectionList';
import collectionsQuery from '../../graphql/queries/list';

class CollectionListContainer extends React.Component {
	render() {
		let collections = [];

		if (
			this.props.collectionListQuery &&
			this.props.collectionListQuery.project
		) {
			collections = this.props.collectionListQuery.project.collections;
		}

		return <CollectionList collections={collections} />;
	}
}

export default compose(collectionsQuery)(CollectionListContainer);
