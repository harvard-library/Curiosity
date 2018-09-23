import React from 'react';
import { compose } from 'react-apollo';

import ProjectRecentActivity from '../../components/ProjectRecentActivity';
import projectActivityQuery from '../../graphql/queries/activity';

const ProjectRecentActivityContainer = () => {
	const activityFeed = [];

	return <ProjectRecentActivity activityFeed={activityFeed} />;
};

export default compose(projectActivityQuery)(ProjectRecentActivityContainer);
