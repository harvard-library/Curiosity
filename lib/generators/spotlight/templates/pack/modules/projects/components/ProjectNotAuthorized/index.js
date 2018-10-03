import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// import ProjectHeaderContainer from '../../containers/ProjectHeaderContainer';
import Header from '../../../../components/navigation/Header';
import ProjectFooterContainer from '../../containers/ProjectFooterContainer';

import './ProjectNotAuthorized.css';

const ProjectNotAuthorized = props => (
	<div className="projectNotAuthorized">
		<Header />
		<Grid>
			<Row>
				<Col md={12}>
					<div className="projectNotAuthorizedContent">
						<h1>You are not authorized to view this project</h1>
						<p>
							If you are an administrator of this project, please login to view
							this project.
						</p>
						<p>
							Or, head <a href="//orphe.us">back home.</a>
						</p>
					</div>
				</Col>
			</Row>
		</Grid>
		<ProjectFooterContainer />
	</div>
);

export default ProjectNotAuthorized;
