import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const articleUpdate = gql`
	mutation articleUpdate($article: ArticleInputType!) {
		articleUpdate(article: $article) {
			_id
		}
	}
`;

const articleUpdateMutation = graphql(articleUpdate, {
	props: params => ({
		articleUpdate: article =>
			params.articleUpdateMutation({
				variables: {
					article
				}
			})
	}),
	name: 'articleUpdateMutation',
	options: {
		refetchQueries: ['articleQuery', 'articleListQuery']
	}
});

export default articleUpdateMutation;
