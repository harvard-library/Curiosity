import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import ReactMapboxGl from 'react-mapbox-gl';

import Textures from '../../../../../../components/common/cover/Textures';

import './ProjectVisit.css';

class ProjectVisit extends React.Component {
	render() {
		const { title, email, url, address, phone } = this.props;

		const Map = ReactMapboxGl({
			accessToken:
				'pk.eyJ1IjoibHVrZWhvbGxpcyIsImEiOiJ6Rk1vdjc0In0.jQDtXA8wqU_wYi5p1ClCyw',
			scrollZoom: false
		});

		if (!email && !url && !address && !phone) {
			return null;
		}

		return (
			<section id="visit">
				<Row>
					<Col md={5} className="projectVisitCol">
						{address ? (
							<Map
								style="mapbox://styles/lukehollis/cj7dnh4fb11452smw1dj34x04" // eslint-disable-line
								containerStyle={{
									height: '100vh',
									minHeight: '500px',
									width: '100%'
								}}
								center={[-71.1139213, 42.3741574]}
								zoom={[13]}
							/>
						) : (
							<div
								style={{
									height: '100vh',
									minHeight: '500px',
									width: '100%',
									overflow: 'hidden'
								}}
							>
								<Textures />
							</div>
						)}
					</Col>
					<Col md={7} className="projectVisitCol">
						<div className="projectVisitInfo">
							<h2>Contact</h2>
							<hr />
							<p>{title}</p>
							{email ? (
								<p>
									<a
										href={`mailto:${email}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{email}
									</a>
								</p>
							) : (
								''
							)}
							{url ? (
								<p>
									<a href={url} target="_blank" rel="noopener noreferrer">
										{url}
									</a>
								</p>
							) : (
								''
							)}
							{address ? <p>{address}</p> : ''}
							{phone ? <p>{phone}</p> : ''}
						</div>
					</Col>
				</Row>
			</section>
		);
	}
}

ProjectVisit.propTypes = {
	email: PropTypes.string,
	url: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string
};

ProjectVisit.defaultProps = {
	email: null,
	url: null,
	address: null,
	phone: null
};

export default ProjectVisit;
