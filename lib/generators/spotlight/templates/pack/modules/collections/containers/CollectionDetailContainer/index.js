import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import CollectionDetail from '../../components/CollectionDetail';
import collectionDetailQuery from '../../graphql/queries/detail';
import collectionRemoveMutation from '../../graphql/mutations/remove';

class CollectionDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleRemove(collectionId) {
		const { collectionRemove, router } = this.props;

		collectionRemove(collectionId)
			.then(response => {
				router.replace('/collections');
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		let collection = [];
		let userIsAdmin = false;

		if (this.props.collectionQuery && this.props.collectionQuery.project) {
			collection = this.props.collectionQuery.project.collection;
			userIsAdmin = this.props.collectionQuery.project.userIsAdmin;
		}

		return (
			<CollectionDetail
				{...collection}
				userIsAdmin={userIsAdmin}
				handleRemove={this.handleRemove}
			/>
		);
	}
}

export default compose(
	collectionDetailQuery,
	collectionRemoveMutation
)(CollectionDetailContainer);
