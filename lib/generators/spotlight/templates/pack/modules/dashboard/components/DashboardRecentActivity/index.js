import React from 'react';
import { Row, Col } from 'react-bootstrap';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import ProjectRecentActivityContainer from '../../../projects/containers/ProjectRecentActivityContainer';

import './DashboardRecentActivity.css';

const DashboardRecentActivity = () => (
	<div className="dashboardRecentActivity">
		<Row>
			<Col md={12}>
				<h2>Recent Activity</h2>
				<hr />
			</Col>
		</Row>
		<ProjectRecentActivityContainer
			params={{
				hostname: getCurrentProjectHostname()
			}}
		/>
	</div>
);

export default DashboardRecentActivity;
