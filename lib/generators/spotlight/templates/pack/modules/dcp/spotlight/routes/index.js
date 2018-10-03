import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import DcpLayout from '../../layouts';
//import MainLayout from '../../../../layouts/MainLayout';

// components
import ItemListPageContainer from '../../../items/containers/ItemListPageContainer';
import ItemDetailContainer from '../../../items/containers/ItemDetailContainer';
import MiradorItemViewerContainer from '../../../mirador/containers/MiradorItemViewerContainer';

// Spotlight project
import SpotlightHome from '../components/SpotlightHome';
import SpotlightFeatureContainer from '../containers/SpotlightFeatureContainer'
import SpotlightFeatureResearchContainer from '../containers/SpotlightFeatureResearchContainer'
import SpotlightBrowseContainer from '../containers/SpotlightBrowseContainer';



export default (
	<div>
		<Route path="/:exhibitSlug/items" component={DcpLayout}>
			<IndexRoute component={ItemListPageContainer} />
			<Route path="/:exhibitSlug/items/:id" component={ItemDetailContainer} />
			<Route path="/:exhibitSlug/items/:id/:slug" component={ItemDetailContainer} />
			<Route path="/:exhibitSlug/items/:id/:slug/mirador" component={MiradorItemViewerContainer} />
		</Route>
		<Route
			component={DcpLayout}
			path="/:exhibitSlug"
		>
			<IndexRoute
				component={SpotlightHome}
			/>
			{/*
				Browse by topics page
			*/}
			<Route
				exact
				path="/:exhibitSlug/browse"
				component={props => (
					<SpotlightBrowseContainer
						{...props}
						params={{
							slug: 'browse',
							exhibitSlug: props.params.exhibitSlug,
						}}
					/>
				)}
			/>

			{/*
				Basic page route
			*/}
			<Route
				exact
				path="/:exhibitSlug/research"
				component={SpotlightFeatureResearchContainer}
			/>
			<Route
				exact
				path="/:exhibitSlug/:slug"
				component={SpotlightFeatureContainer}
			/>
		</Route>

	</div>
);
