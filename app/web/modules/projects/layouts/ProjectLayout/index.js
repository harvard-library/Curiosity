import React from 'react';

import ReleaseMessage from '../../../../components/common/ReleaseMessage';

import ProjectHeaderContainer from '../../containers/ProjectHeaderContainer';
import ProjectFooterContainer from '../../containers/ProjectFooterContainer';

import './ProjectLayout.css';

const ProjectLayout = props => (
	<div>
		<ProjectHeaderContainer />
		{props.children}
		<ProjectFooterContainer />
		<ReleaseMessage />
	</div>
);

export default ProjectLayout;
