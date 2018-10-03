import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const collectionUpdate = gql`
	mutation collectionUpdate(
		$collection: CollectionInputType!
		$items: [String]
	) {
		collectionUpdate(collection: $collection, items: $items) {
			_id
		}
	}
`;

const collectionUpdateMutation = graphql(collectionUpdate, {
	props: params => ({
		collectionUpdate: (collection, items) =>
			params.collectionUpdateMutation({
				variables: {
					collection,
					items
				}
			})
	}),
	name: 'collectionUpdateMutation',
	options: {
		refetchQueries: ['collectionListQuery', 'collectionQuery']
	}
});

export default collectionUpdateMutation;
