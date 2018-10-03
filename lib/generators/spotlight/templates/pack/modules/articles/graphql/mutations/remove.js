import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const articleRemove = gql`
	mutation articleRemove($id: String!, $hostname: String!) {
		articleRemove(_id: $id, hostname: $hostname) {
			result
		}
	}
`;

const articleRemoveMutation = graphql(articleRemove, {
	props: params => ({
		articleRemove: id =>
			params.articleRemoveMutation({
				variables: {
					id,
					hostname: getCurrentProjectHostname()
				}
			})
	}),
	name: 'articleRemoveMutation',
	options: {
		refetchQueries: ['articleQuery', 'articleListQuery']
	}
});

export default articleRemoveMutation;
