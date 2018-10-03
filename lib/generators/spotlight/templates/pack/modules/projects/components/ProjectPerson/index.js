import React from 'react';

import Avatar from '../../../users/components/Avatar';

import './ProjectPerson.css';

const ProjectPerson = ({ user }) => {
	return (
		<div className="projectPerson">
			{user.avatar ? <Avatar alt={user.name} src={user.avatar} /> : ''}
			<h4 className="projectPersonName">{user.name}</h4>
			{user.name !== user.email ? (
				<div>
					<hr />
					<p>
						{/*
							TODO: set user project position (like curator, researcher, administrator, etc)
						*/}
						{user.email}
					</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default ProjectPerson;
