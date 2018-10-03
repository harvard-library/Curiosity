import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Projects
import MainLayout from '../../../layouts/MainLayout';
import ProjectCreateContainer from '../containers/ProjectCreateContainer';

export default (
	<div>
		<Route path="/create" component={MainLayout}>
			<IndexRoute component={ProjectCreateContainer} />
		</Route>
	</div>
);
