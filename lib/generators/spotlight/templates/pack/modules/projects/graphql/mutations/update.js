import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const projectUpdate = gql`
	mutation projectUpdate($project: ProjectInputType!) {
		projectUpdate(project: $project) {
			_id
		}
	}
`;

const projectUpdateMutation = graphql(projectUpdate, {
	props: params => ({
		projectUpdate: project =>
			params.projectUpdateMutation({
				variables: {
					project
				}
			})
	}),
	name: 'projectUpdateMutation',
	options: {
		refetchQueries: ['projectsQuery', 'projectQuery']
	}
});

export default projectUpdateMutation;
