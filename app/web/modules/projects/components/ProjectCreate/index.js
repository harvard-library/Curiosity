import React from 'react';

import ProjectNameAvailabilityCheckContainer from '../../containers/ProjectNameAvailabilityCheckContainer';

import './ProjectCreate.css';

const ProjectCreate = props => (
	<div
		className={`
			projectCreate
			${!props.currentUserId ? 'projectCreateDisabled' : ''}
		`}
	>
		{!props.currentUserId ? (
			<div className="projectCreateWarning">
				<span>Please login or create an account to create a project.</span>
			</div>
		) : (
			''
		)}

		<h1>Create a new project</h1>

		<hr />

		<ProjectNameAvailabilityCheckContainer
			params={{
				hostname: props.projectHostname
			}}
			onChange={props.onChange}
			onSubmit={props.onSubmit}
		/>
	</div>
);

export default ProjectCreate;
