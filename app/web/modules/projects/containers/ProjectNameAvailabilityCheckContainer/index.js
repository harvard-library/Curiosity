import React from 'react';
import { compose } from 'react-apollo';

import ProjectNameAvailabilityCheck from '../../components/ProjectNameAvailabilityCheck';
import projectAvailabilityQuery from '../../graphql/queries/availability';

class ProjectNameAvailabilityCheckContainer extends React.Component {
	render() {
		let projectFound = false;

		if (
			this.props.params.hostname &&
			this.props.params.hostname.length &&
			this.props.projectAvailabilityQuery &&
			this.props.projectAvailabilityQuery.checkProjectAvailability
		) {
			projectFound = true;
		}

		return (
			<ProjectNameAvailabilityCheck
				projectFound={projectFound}
				onChange={this.props.onChange}
				onSubmit={this.props.onSubmit}
			/>
		);
	}
}

export default compose(projectAvailabilityQuery)(
	ProjectNameAvailabilityCheckContainer
);
