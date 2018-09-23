import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query projectsQuery {
		projects {
			_id
		}
	}
`;

const projectsQuery = graphql(query, {
	name: 'projectsQuery',
	props: props => ({
		projects: props.projectsQuery.projects
	})
});

export default projectsQuery;
