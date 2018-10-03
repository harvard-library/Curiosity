import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import UserListItem from '../../../users/components/UserListItem';

import './ProjectRecentActivityFeedItem.css';

const ProjectRecentActivityFeedItem = ({ type, excerpt, url }) => (
	<div className="projectRecentActivityFeedItem">
		<Row>
			<Col sm={4}>
				<UserListItem />
			</Col>
			<Col sm={1}>
				<h3 className="projectRecentActivityFeedItemActivityItem">{type}</h3>
				<p className="projectRecentActivityFeedItemExcerpt">{excerpt}</p>
			</Col>
			<Col sm={1}>
				<Link className="projectRecentActivityFeedItemLink" to={url}>
					View
				</Link>
			</Col>
		</Row>
	</div>
);

export default ProjectRecentActivityFeedItem;
