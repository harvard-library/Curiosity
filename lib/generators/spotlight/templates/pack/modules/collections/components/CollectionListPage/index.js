import React from 'react';
import _ from 'underscore';

import CollectionCover from '../CollectionCover';
import CollectionListContainer from '../../containers/CollectionListContainer';

import './CollectionListPage.css';

const CollectionListPage = props => {
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
				title="Collections"
				coverLink={props.userIsAdmin ? '/collections/create' : null}
				coverLinkText={props.userIsAdmin ? 'Create new' : null}
				coverImage={coverImage}
			/>
			<CollectionListContainer />
		</div>
	);
};

export default CollectionListPage;
