import React from 'react';
import { compose } from 'react-apollo';

import ProjectCover from '../../components/ProjectHome/sections/ProjectCover';
import projectCoverQuery from '../../graphql/queries/projectCoverQuery';

const ProjectCoverContainer = props => {
	let project = null;

	if (props.projectCoverQuery) {
		project = props.projectCoverQuery.project;
	}

	return <ProjectCover project={project} />;
};

export default compose(projectCoverQuery)(ProjectCoverContainer);
