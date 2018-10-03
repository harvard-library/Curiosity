import React from 'react';
import HomeCover from './sections/HomeCover';
import HomeCollectionHighlightsContainer from '../../containers/HomeCollectionHighlightsContainer';
import HomeRelated from './sections/HomeRelated';
import HomeItemHighlightContainer from '../../containers/HomeItemHighlightContainer';


import './BlacklightHome.scss';

const BlacklightHome = () => (

	<div>
		<div className="hl__blacklightHome">
			<HomeCover />
			<section className="hl__blacklightHomeMain">
				<HomeCollectionHighlightsContainer />
				<HomeRelated />
				<HomeItemHighlightContainer />
			</section>
		</div>
	</div>

);



export default BlacklightHome;
