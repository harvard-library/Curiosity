import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import DcpLayout from '../../layouts';
import MainLayout from '../../../../layouts/MainLayout';

// components
import ItemListPageContainer from '../../../items/containers/ItemListPageContainer';
import MiradorItemViewerContainer from '../../../mirador/containers/MiradorItemViewerContainer';

// cp home
import BlacklightHome from '../components/BlacklightHome';

// Blacklight general pages
import BlacklightTerms from '../components/BlacklightPages/BlacklightTerms';
import BlacklightAbout from '../components/BlacklightPages/BlacklightAbout';

//Blacklight SpotlightBrowse
import BlacklightBrowseCollections from '../components/BlacklightBrowseCollections';
import BlacklightBrowseRepositories from '../components/BlacklightBrowseRepositories';
import BlacklightItemListPageContainer from '../containers/BlacklightItemListPageContainer';
import BlacklightItemDetailContainer from '../containers/BlacklightItemDetailContainer';



export default (
	<div>
		<Route path="/search" component={DcpLayout}>
			<IndexRoute component={BlacklightItemListPageContainer} />
		</Route>

		<Route path="/items" component={MainLayout}>
			<IndexRoute component={ItemListPageContainer} />
			<Route path="/items/:id" component={BlacklightItemDetailContainer} />
			<Route path="/items/:id/:slug" component={BlacklightItemDetailContainer} />
			<Route path="/items/:id/:slug/mirador" component={MiradorItemViewerContainer} />
		</Route>

		<Route component={DcpLayout}>
			<Route
				exact
				path="/"
				component={BlacklightHome}
			/>
			<Route
				exact
				path="/collections"
				component={BlacklightBrowseCollections}
			/>

			<Route
				exact
				path="/repositories"
				component={BlacklightBrowseRepositories}
			/>
			<Route
				exact
				path="/terms"
				component={BlacklightTerms}
			/>
			<Route
				exact
				path="/about"
				component={BlacklightAbout}
			/>
		</Route>

	</div>
);
