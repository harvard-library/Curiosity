import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query itemListQuery(
		$hostname: String
		$textsearch: String
		$offset: Int
		$limit: Int
	) {
		project(hostname: $hostname) {
			_id
			items(textsearch: $textsearch, offset: $offset, limit: $limit) {
				_id
				title
				slug
				description
				files {
					_id
					type
					name
				}
			}
			itemsCount(textsearch: $textsearch)

			files {
				_id
				type
				name
			}
		}
	}
`

const itemListQuery = graphql(query, {
	name: 'itemListQuery',
	options: ({ params }) => {
		const queryParams = qs.parse(window.location.search.replace('?', ''));
		const limit = 15;
		let slug = '';
		let skip = 0;
		let language = null;
		let genre = null;
		let subjects = null;
		let place = null;
		let repository = null;

		if (params && params.exhibitSlug) {
			slug = params.exhibitSlug;
		}

		if (queryParams.page && parseInt(queryParams.page, 10) >= 1) {
			skip = (parseInt(queryParams.page, 10) - 1) * limit;
		}

		if (queryParams.language) {
			language = queryParams.language;
		}

		if (queryParams.genre) {
			genre = queryParams.genre;
		}

		if (queryParams.subjects) {
			subjects = queryParams.subjects;
		}

		if (queryParams.place) {
			place = queryParams.place;
		}

		if (queryParams.repository) {
			repository = queryParams.repository;
		}

		const variables = {
			slug,
			limit,
			skip,
			language,
			genre,
			subjects,
			place,
			repository,
		};

		return {
			variables,
		};
	},
});

export default itemListQuery;
