import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Field } from 'redux-form';

import UserInviteContainer from '../../../../users/containers/UserInviteContainer';
import UserListItem from '../../../../users/components/UserListItem';

import './ProjectPeopleField.css';

class ProjectPeopleField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			role: 'administrator',
			status: ''
		};
		autoBind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (
			!this.props.role &&
			nextProps.role &&
			nextProps.role.length &&
			!this.props.status &&
			nextProps.status &&
			nextProps.status.length
		) {
			this.setState({
				role: nextProps.role,
				status: nextProps.status
			});
		}
	}

	toggleFieldRole(e) {
		this.setState({
			role: e.target.options[e.target.selectedIndex].value
		});
	}

	toggleFieldStatus(e) {
		this.setState({
			status: e.target.options[e.target.selectedIndex].value
		});
	}

	updatePostUserInvite(user) {
		this.setState({
			user,
			role: 'admin',
			status: 'pending'
		});
	}

	render() {
		const { field, user } = this.props;
		const { status } = this.state;

		return (
			<div className="projectPeopleField projectPeopleFieldInput">
				<Row key={field}>
					<Col md={6}>
						{user ? (
							<UserListItem {...user} />
						) : (
							<UserInviteContainer
								updatePostUserInvite={this.updatePostUserInvite}
							/>
						)}
					</Col>
					<Col md={3}>
						<Field
							name={`${field}.role`}
							component="select"
							onChange={this.toggleFieldRole}
						>
							<option value="administrator">Administrator</option>
							<option value="editor">Editor</option>
							<option value="contributor">Contributor</option>
						</Field>
					</Col>
					<Col md={2}>
						{user && user.isActiveUser ? (
							<Field
								name={`${field}.status`}
								component="select"
								onChange={this.toggleFieldStatus}
							>
								<option value="public">Public</option>
								<option value="private">Private</option>
								<option value="pending">Pending</option>
							</Field>
						) : (
							<p className="projectPersonStatus">{status}</p>
						)}
					</Col>
					<Col md={1}>
						<button
							className="projectPeopleRemove"
							onClick={this.props.handleRemove}
						>
							<i className="mdi mdi-close" />
						</button>
					</Col>
				</Row>
			</div>
		);
	}
}

ProjectPeopleField.propTypes = {
	field: PropTypes.string,
	user: PropTypes.object
};

export default ProjectPeopleField;
