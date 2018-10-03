import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const query = gql`
	query featureQuery($slug: String!) {
		page(slug: $slug) {
	    id
			title
			slug
			content
		}
	}
`;

const featureQuery = graphql(query, {
	name: 'featureQuery',
	options: ({ params }) => ({
		variables: {
			slug: params.slug,
		}
	}),
});

export default featureQuery;
