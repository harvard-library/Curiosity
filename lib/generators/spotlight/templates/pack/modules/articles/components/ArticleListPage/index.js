import React from 'react';
import _ from 'underscore';

import CollectionCover from '../../../collections/components/CollectionCover';
import Pagination from '../../../../components/pagination/Pagination';
import ArticleListContainer from '../../containers/ArticleListContainer';

import './ArticleListPage.css';

const ArticleListPage = props => {
	let files = [];
	let coverImage = null;

	if (props.files && props.files.length) {
		files = props.files;
	}

	if (files.length) {
		coverImage = _.sample(files).name;
	}

	return (
		<div>
			<CollectionCover
				title="Articles"
				coverLink={props.userIsAdmin ? '/articles/create' : null}
				coverLinkText={props.userIsAdmin ? 'Create new' : null}
				coverImage={coverImage}
			/>
			<ArticleListContainer />
			<Pagination total={0} limit={18} />
		</div>
	);
};

export default ArticleListPage;
