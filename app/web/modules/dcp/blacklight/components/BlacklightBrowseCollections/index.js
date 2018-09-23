import React from 'react';
import BlacklightCollectionsListContainer from '../../containers/BlacklightCollectionsListContainer';

import './BlacklightBrowseCollections.scss';

const BlacklightBrowseCollections = () => (
	<div className="hl__blacklightBrowse">

		<section className="hl__blacklightBrowse__pageHeader">
			<h2 className="hl__blacklightBrowse__title">Browse digital collections</h2>
			<h5 className="hl__blacklightBrowseCol__subtitle">Curated views that provide specialized search options and unique content</h5>
		</section>

		<section className="hl__blacklightBrowseCol__sortToolbar">
			<ul className="hl__blacklightBrowseCol__sortLinkContainer">
				<li className="hl__blacklightBrowseCol__sortLink">	<i className="mdi mdi-chevron-down downChevron"></i>Title</li>
				<li className="hl__blacklightBrowseCol__sortLink">Number of Items</li>
			</ul>
		</section>

		<BlacklightCollectionsListContainer />

	</div>


);

export default BlacklightBrowseCollections;
