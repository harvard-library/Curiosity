import React from 'react';
import autoBind from 'react-autobind';

import Button from '../../../../../../components/common/buttons/Button';
import Cover from '../../../../../../components/common/cover/Cover';
import Bricks from '../../../../../../components/common/cover/Bricks';

import './ProjectCover.css';

class ProjectCover extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	render() {
		const { project } = this.props;

		if (!project) {
			// TODO: loading
			return null;
		}

		return (
			<Cover
				className="home-cover home-cover--project"
				background={<Bricks files={project.files} />}
				overlay={<div className="home-overlay" />}
				left
				reactsToMouse
				full
			>
				<div className="home-cover-content">
					<h1>{project.title}</h1>

					{project.subtitle ? <p className="lead">{project.subtitle}</p> : ''}

					<div className="home-cover-buttons">
						<Button dark to="/collections">
							Explore
						</Button>
						{project.description ? (
							<Button transparentLight outline to="/#about">
								About
							</Button>
						) : (
							''
						)}
					</div>
				</div>
			</Cover>
		);
	}
}

export default ProjectCover;
