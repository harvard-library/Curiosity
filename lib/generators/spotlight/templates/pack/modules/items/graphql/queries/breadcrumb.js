import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query itemBreadcrumbQuery($slug: String) {
		exhibit(slug: $slug) {
			id
      title
			slug
      items
		}
	}
`

const itemBreadcrumbQuery = graphql(query, {
	name: 'itemBreadcrumbQuery',
	options: ({ params }) => ({
		variables: {
			slug: params && params.exhibitSlug ? params.exhibitSlug : '',
		}
	}),
});

export default itemBreadcrumbQuery;
