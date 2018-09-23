import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const collectionCreate = gql`
	mutation collectionCreate(
		$hostname: String!
		$collection: CollectionInputType!
		$items: [String]
	) {
		collectionCreate(
			hostname: $hostname
			collection: $collection
			items: $items
		) {
			_id
		}
	}
`;

const collectionCreateMutation = graphql(collectionCreate, {
	props: params => ({
		collectionCreate: (collection, items) =>
			params.collectionCreateMutation({
				variables: {
					collection,
					items,
					hostname: getCurrentProjectHostname()
				}
			})
	}),
	name: 'collectionCreateMutation',
	options: {
		refetchQueries: ['collectionListQuery', 'collectionQuery']
	}
});

export default collectionCreateMutation;
