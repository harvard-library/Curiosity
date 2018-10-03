import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query exhibitDetailQuery($slug: String) {
		exhibit(slug: $slug) {
			id
			title
			slug
			itemCount
      featured_image
		}
	}
`

const exhibitDetailQuery = graphql(query, {
	name: 'exhibitDetailQuery',
	options: ({ params }) => {
		let slug = '';
		if (params && params.exhibitSlug) {
			slug = params.exhibitSlug;
		}
		return {
			variables: {
  			slug,
			},
		};
	},
});

export default exhibitDetailQuery;
