import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
// items
import AuthContainer from '../containers/AuthContainer';
import LogoutContainer from '../containers/LogoutContainer';

export default (
	<div>
		<Route path="/sign-in" component={ProjectLayout}>
			<IndexRoute component={AuthContainer} />
		</Route>
		<Route path="/logout" component={ProjectLayout}>
			<IndexRoute component={LogoutContainer} />
		</Route>
	</div>
);
