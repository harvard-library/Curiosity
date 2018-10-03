import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query listItemQuery($hostname: String, $id: String) {
		project(hostname: $hostname) {
			_id

			item(_id: $id) {
				_id
				title
				slug
			}
		}
	}
`;

const listItemQuery = graphql(query, {
	name: 'listItemQuery',
	options: ({ _id }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			id: _id
		}
	})
});

export default listItemQuery;
