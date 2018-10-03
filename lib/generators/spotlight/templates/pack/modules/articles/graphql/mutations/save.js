import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';

const articleSave = gql`
	mutation articleSave($hostname: String!, $article: ArticleInputType!) {
		articleSave(hostname: $hostname, article: $article) {
			_id
		}
	}
`;

const articleSaveMutation = graphql(articleSave, {
	props: params => ({
		articleSave: article =>
			params.articleSaveMutation({
				variables: {
					article,
					hostname: getCurrentProjectHostname()
				}
			})
	}),
	name: 'articleSaveMutation',
	options: {
		refetchQueries: ['articleQuery', 'articleListQuery']
	}
});

export default articleSaveMutation;
