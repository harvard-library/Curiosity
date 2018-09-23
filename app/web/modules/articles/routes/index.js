import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import ArticleListPageContainer from '../containers/ArticleListPageContainer';
import ArticleDetailContainer from '../containers/ArticleDetailContainer';
import ArticleEditorContainer from '../containers/ArticleEditorContainer';

export default (
	<div>
		<Route path="/articles" component={ProjectLayout}>
			<IndexRoute component={ArticleListPageContainer} />
			<Route path="/articles/create" component={ArticleEditorContainer} />
			<Route path="/articles/:id/:slug" component={ArticleDetailContainer} />
			<Route
				path="/articles/:id/:slug/edit"
				component={ArticleEditorContainer}
			/>
		</Route>
	</div>
);
