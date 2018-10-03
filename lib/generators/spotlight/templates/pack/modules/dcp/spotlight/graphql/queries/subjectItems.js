import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
	query subjectItemsQuery($slug: String, $limit: Int, $subjects: String) {
		exhibit(slug: $slug) {
			id
			title
			slug
			itemCount
			items(limit: $limit subjects: $subjects)
		}
	}
`

const subjectItemsQuery = graphql(query, {
	name: 'subjectItemsQuery',
	options: ({ params, label }) => {
		const limit = 20;
		let slug = '';
		let subjects = null;

		if (params && params.exhibitSlug) {
			slug = params.exhibitSlug;
		}

		subjects = label;

		const variables = {
			slug,
			limit,
			subjects,
		};

		return {
			variables,
		};
	},
});

export default subjectItemsQuery;
