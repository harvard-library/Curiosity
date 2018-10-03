import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import './Footer.css';

export default class Footer extends React.Component {
	render() {
		const now = new Date();
		const year = now.getFullYear();
		return (
			<section id="footer">
				<Grid>
					<Row>
						<Col lg={4}>
							<span className="footerCopyright">© HUL {year}</span>
						</Col>
						<Col lg={8}>
							<div className="footerLinks">
								<Link href="mailto:contact@library.harvard.edu">Contact</Link>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
