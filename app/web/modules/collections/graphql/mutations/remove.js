import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const collectionRemove = gql`
	mutation collectionRemove($id: String!, $hostname: String!) {
		collectionRemove(_id: $id, hostname: $hostname) {
			result
		}
	}
`;

const collectionRemoveMutation = graphql(collectionRemove, {
	props: params => ({
		collectionRemove: id =>
			params.collectionRemoveMutation({
				variables: {
					id,
					hostname: getCurrentProjectHostname()
				}
			})
	}),
	name: 'collectionRemoveMutation',
	options: {
		refetchQueries: ['collectionListQuery', 'collectionQuery']
	}
});

export default collectionRemoveMutation;
