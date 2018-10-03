import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query articleListQuery($hostname: String) {
		project(hostname: $hostname) {
			_id
			articles {
				_id
				title
				slug
				content
			}
			articlesCount
			files {
				_id
				name
			}
		}
	}
`;

const articleListQuery = graphql(query, {
	name: 'articleListQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname()
		}
	})
});

export default articleListQuery;
