import React from 'react';
import { Route } from 'react-router';

// orphe.us home
import Home from '../components/Home';

// project home
import ProjectHomeContainer from '../../projects/containers/ProjectHomeContainer';

// lib
import getCurrentProjectHostname from '../../../lib/getCurrentProjectHostname';

export default (
	<div>
		<Route
			exact
			path="/"
			component={() => {
				const currentProjectHostname = getCurrentProjectHostname();

				// If this is a project, return the project home container
				if (currentProjectHostname && currentProjectHostname.length) {
					return <ProjectHomeContainer />;
				}

				// Otherwise, return the main hul home page
				return <Home />;
			}}
		/>
	</div>
);
