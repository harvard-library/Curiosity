import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query projectAvailabilityQuery($hostname: String) {
		checkProjectAvailability(hostname: $hostname) {
			_id
			title
			slug
			hostname
			description
		}
	}
`;

const projectAvailabilityQuery = graphql(query, {
	name: 'projectAvailabilityQuery',
	options: ({ params }) => ({
		variables: {
			hostname: params.hostname
		}
	})
});

export default projectAvailabilityQuery;
