import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import * as authActions from '../../../auth/actions';
import ProjectCreate from '../../components/ProjectCreate';
import projectCreateMutation from '../../graphql/mutations/create';

class ProjectCreateContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			projectSlug: '',
			submitted: false,
			available: false
		};
	}

	componentDidMount() {
		const { userId, toggleAuthModal } = this.props;
		if (!userId) {
			toggleAuthModal(true);
		}
	}

	async onSubmit(values) {
		const newProject = {
			title: values.title,
			hostname: `${values.hostname}.orphe.us`,
			status: 'private'
		};

		// create project
		await this.props.projectCreate(newProject);
		window.location = `//${newProject.hostname}/dashboard`;
	}

	onChange(values) {
		this.setState({
			projectHostname: values.hostname || ''
		});
	}

	render() {
		return (
			<ProjectCreate
				projectHostname={`${this.state.projectHostname}.orphe.us`}
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				currentUserId={this.props.userId}
			/>
		);
	}
}

const mapStateToProps = state => ({
	userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
	toggleAuthModal: toggled => {
		dispatch(authActions.toggleAuthModal(toggled));
	}
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	projectCreateMutation
)(ProjectCreateContainer);
