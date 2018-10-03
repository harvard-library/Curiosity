import React from 'react';
import { compose } from 'react-apollo';

import ProjectFooter from '../../components/ProjectFooter';
import projectQuery from '../../graphql/queries/detail';

const ProjectFooterContainer = props => {
	let project = null;

	if (props.projectQuery) {
		project = props.projectQuery.project;
	}

	return <ProjectFooter project={project} />;
};

export default compose(projectQuery)(ProjectFooterContainer);
