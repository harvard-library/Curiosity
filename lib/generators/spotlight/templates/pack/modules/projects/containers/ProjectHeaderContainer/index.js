import React from 'react';
import { compose } from 'react-apollo';

import ProjectHeader from '../../components/ProjectHeader';
import projectQuery from '../../graphql/queries/detail';
import countsQuery from '../../../dashboard/graphql/queries/counts';

const ProjectHeaderContainer = props => {
	let project = null;

	if (props.projectQuery && props.countsQuery) {
		project = {
			...props.projectQuery.project,
			...props.countsQuery.project
		};
	}

	return <ProjectHeader project={project} />;
};

export default compose(
	projectQuery,
	countsQuery
)(ProjectHeaderContainer);
