import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectPeopleEditor from '../../components/ProjectPeopleEditor';
import projectListQuery from '../../graphql/queries/list';
import projectDetailQuery from '../../graphql/queries/detail';
import projectUpdateMutation from '../../graphql/mutations/update';
import projectRemoveMutation from '../../graphql/mutations/remove';

class ProjectPeopleContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(_values, a, b, c) {
		const values = Object.assign({}, _values);
		const { projectUpdate, router } = this.props;

		delete values.__typename;
		delete values.userIsAdmin;
		delete values.collections;
		delete values.items;

		// sanitize user input
		const users = values.users.slice();
		const sanitizedUsers = [];

		users.forEach(user => {
			// process user input
			const sanitizedUser = Object.assign({}, user);

			if (!sanitizedUser.user) {
				return null;
			}

			sanitizedUser.userId = sanitizedUser.user._id;
			delete sanitizedUser.user;
			delete sanitizedUser.__typename;
			sanitizedUsers.push(sanitizedUser);
		});
		values.users = sanitizedUsers;

		projectUpdate(values)
			.then(response => {
				router.replace('/dashboard/');
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		let project;

		if (this.props.projectQuery) {
			project = this.props.projectQuery.project;
		}

		return (
			<ProjectPeopleEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				initialValues={project}
			/>
		);
	}
}

export default compose(
	projectUpdateMutation,
	projectRemoveMutation,
	projectDetailQuery,
	projectListQuery
)(ProjectPeopleContainer);
