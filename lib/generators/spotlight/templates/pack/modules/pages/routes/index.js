import React from 'react';
import { Route } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import PageContainer from '../containers/PageContainer';

export default (
	<div>
		<Route
			path=":slug"
			component={props => (
				<ProjectLayout>
					<PageContainer {...props} />
				</ProjectLayout>
			)}
		/>
	</div>
);
