import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query projectQuery($hostname: String) {
		project(hostname: $hostname) {
			_id
			title
			slug
			userIsAdmin
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
		}
	}
`;

const projectQuery = graphql(query, {
	name: 'projectQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname()
		}
	})
});

export default projectQuery;
