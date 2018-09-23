import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// import ProjectHeaderContainer from '../../containers/ProjectHeaderContainer';
import Header from '../../../../components/navigation/Header';
import ProjectFooterContainer from '../../containers/ProjectFooterContainer';

import './ProjectNotFound.css';

const ProjectNotFound = props => (
	<div className="projectNotFound">
		<Header />
		<Grid>
			<Row>
				<Col md={12}>
					<h1>This project was not found.</h1>
					<p>
						Head <a href="//orphe.us">back home.</a>
					</p>
				</Col>
			</Row>
		</Grid>
		<ProjectFooterContainer />
	</div>
);

export default ProjectNotFound;
