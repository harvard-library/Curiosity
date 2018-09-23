import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const articleCreate = gql`
	mutation articleCreate($hostname: String!, $article: ArticleInputType!) {
		articleCreate(hostname: $hostname, article: $article) {
			_id
		}
	}
`;

const articleCreateMutation = graphql(articleCreate, {
	props: params => ({
		articleCreate: article =>
			params.articleCreateMutation({
				variables: {
					article,
					hostname: getCurrentProjectHostname()
				}
			})
	}),
	name: 'articleCreateMutation',
	options: {
		refetchQueries: ['articleQuery', 'articleListQuery']
	}
});

export default articleCreateMutation;
