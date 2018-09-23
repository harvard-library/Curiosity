import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import ProjectRecentActivityFeedItem from '../ProjectRecentActivityFeedItem';
import './ProjectRecentActivity.css';

const ProjectRecentActivity = ({ activityFeed }) => (
	<div className="projectRecentActivity">
		{activityFeed.map(feedItem => (
			<ProjectRecentActivityFeedItem {...feedItem} />
		))}
		{activityFeed.length === 0 ? (
			<Row>
				<Col md={12}>
					<div className="noActivity">
						<p>There is no recent activity for this project.</p>
					</div>
				</Col>
			</Row>
		) : (
			''
		)}
	</div>
);

ProjectRecentActivity.propTypes = {
	activityFeed: PropTypes.array
};

ProjectRecentActivity.defaultProps = {
	activityFeed: []
};

export default ProjectRecentActivity;
