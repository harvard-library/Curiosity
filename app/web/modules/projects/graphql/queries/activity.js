import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query projectActivityQuery($hostname: String) {
		project(hostname: $hostname) {
			_id
			activity {
				user {
					username
					name
				}
				type
				excerpt
				url
			}
		}
	}
`;

const projectActivityQuery = graphql(query, {
	name: 'projectActivityQuery',
	options: ({ params }) => ({
		variables: {
			hostname: params.hostname
		}
	})
});

export default projectActivityQuery;
