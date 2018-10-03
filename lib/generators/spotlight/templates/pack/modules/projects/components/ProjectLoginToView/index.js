import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// import ProjectHeaderContainer from '../../containers/ProjectHeaderContainer';
import Header from '../../../../components/navigation/Header';
import ProjectFooterContainer from '../../containers/ProjectFooterContainer';

import './ProjectLoginToView.css';

const ProjectLoginToView = props => (
	<div className="projectLoginToView">
		<Header />
		<Grid>
			<Row>
				<Col md={12}>
					<div className="projectLoginToViewContent">
						<h1>Please login to view this project.</h1>
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

export default ProjectLoginToView;
