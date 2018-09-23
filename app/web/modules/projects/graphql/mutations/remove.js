import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const projectRemove = gql`
	mutation projectRemove($id: String!, $hostname: String!) {
		projectRemove(_id: $id, hostname: $hostname) {
			result
		}
	}
`;

const projectRemoveMutation = graphql(projectRemove, {
	props: params => ({
		projectRemove: id =>
			params.projectRemoveMutation({
				variables: {
					id,
					hostname: getCurrentProjectHostname()
				}
			})
	}),
	name: 'projectRemoveMutation',
	options: {
		refetchQueries: ['projectsQuery', 'projectQuery']
	}
});

export default projectRemoveMutation;
