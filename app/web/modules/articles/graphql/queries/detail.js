import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query articleQuery($hostname: String, $id: String) {
		project(hostname: $hostname) {
			_id
			userIsAdmin
			article(_id: $id) {
				_id
				title
				slug
				content
			}
		}
	}
`;

const articleQuery = graphql(query, {
	name: 'articleQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			id: params.id
		}
	})
});

export default articleQuery;
