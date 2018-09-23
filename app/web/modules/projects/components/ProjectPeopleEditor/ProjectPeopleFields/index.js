import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProjectPeopleField from '../ProjectPeopleField';
import NoResults from '../../../../../components/pagination/NoResults';

import './ProjectPeopleFields.css';

const ProjectPeopleFields = ({ fields, users }) => {
	return (
		<div className="projectPeople">
			<div className="projectPeopleLabels">
				<Row>
					<Col md={6}>
						<label>User</label>
					</Col>
					<Col md={3}>
						<label>Role</label>
					</Col>
					<Col md={2}>
						<label>Status</label>
					</Col>
					<Col md={1} />
				</Row>
			</div>
			{fields.map((field, index) => {
				let role = '';
				let status = '';
				let user = null;

				if (users) {
					users.forEach((_user, i) => {
						if (index === i) {
							role = _user.role;
							status = _user.status;
							user = _user.user;
						}
					});
				}

				return (
					<ProjectPeopleField
						key={field}
						field={field}
						index={index}
						role={role}
						status={status}
						user={user}
						handleRemove={() => fields.remove(index)}
					/>
				);
			})}

			{!fields.length ? (
				<div className="projectPeopleNoResults">
					<NoResults message="No users are associated with this project." />
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default ProjectPeopleFields;
