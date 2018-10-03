import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const query = gql`
	query metaItemListQuery($hostname: String, $ids: [String]) {
		project(hostname: $hostname) {
			_id
			items(ids: $ids) {
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
		}
	}
`;

const metaItemListQuery = graphql(query, {
	name: 'metaItemListQuery',
	options: ({ ids }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			ids
		}
	})
});

export default metaItemListQuery;
