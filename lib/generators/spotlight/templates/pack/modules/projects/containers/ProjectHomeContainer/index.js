import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ProjectHome from '../../components/ProjectHome';
import ProjectLoginToView from '../../components/ProjectLoginToView';
import ProjectNotAuthorized from '../../components/ProjectNotAuthorized';
import ProjectNotFound from '../../components/ProjectNotFound';
import projectQuery from '../../graphql/queries/detail';

const ProjectHomeContainer = props => {
	let project;

	if (!props.projectQuery) {
		// TODO: loading state
		return <div />;
	} else {
		project = props.projectQuery.project;
	}

	if (!project) {
		return <ProjectNotFound />;

		// TODO: move authentication logic to server side and global check in react router
	} else if (project.status === 'private' && !project.userIsAdmin) {
		if (props.userId) {
			return <ProjectNotAuthorized />;
		} else {
			return <ProjectLoginToView />;
		}
	}

	return <ProjectHome {...project} />;
};

const mapStateToProps = state => ({
	userId: state.auth.userId
});

export default compose(
	projectQuery,
	withRouter,
	connect(mapStateToProps)
)(ProjectHomeContainer);
