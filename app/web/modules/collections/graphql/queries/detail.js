import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query collectionQuery($hostname: String, $id: String) {
		project(hostname: $hostname) {
			_id
			userIsAdmin
			collection(_id: $id) {
				_id
				title
				slug
				coverImage
				description
				projectId
				items {
					_id
					title
					description
					slug
					files {
						_id
						name
						title
						itemId
						type
						path
						thumbPath
						slug
					}
				}
				itemsCount
			}
		}
	}
`;

const collectionQuery = graphql(query, {
	name: 'collectionQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			id: params.id
		}
	})
});

export default collectionQuery;
