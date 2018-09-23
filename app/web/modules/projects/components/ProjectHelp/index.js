import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DashboardNav from '../../../dashboard/components/DashboardNav';

import './ProjectHelp.css';

const ProjectHelp = () => (
	<div className="projectHelp">
		<Grid>
			<DashboardNav />

			<h1>Contact Support</h1>

			<Row>
				<Col md={12}>
					<div className="contactSupport" />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default ProjectHelp;
