import React from 'react';
import BlacklightRepositoriesListContainer from '../../containers/BlacklightRepositoriesListContainer';

import './BlacklightBrowseRepositories.scss';

const BlacklightBrowseRepositories = () => {


	return (
		<div className="hl__blacklightBrowse">

			<section className="hl__blacklightBrowse__pageHeader browseRepoHeader">
				<h2 className="hl__blacklightBrowse__title browseRepoTitle">Browse by Repository</h2>
			</section>
			<BlacklightRepositoriesListContainer />



		</div>







	) ;

}

export default BlacklightBrowseRepositories;
