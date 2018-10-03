import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import '../../../../components/navigation/Footer/Footer.css';
import './ProjectFooter.css';

class Footer extends React.Component {
	render() {
		const { project } = this.props;
		const now = new Date();
		const year = now.getFullYear();

		return (
			<section id="footer" className="projectFooter">
				<Grid>
					<Row>
						<Col md={12}>
							<ul className="projectFooterNav">
								<li>
									<Link to="/terms">Terms</Link>
								</li>
								<li>
									<Link to="/privacy">Privacy</Link>
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							{project ? (
								<span className="footerCopyright">
									© Copyright {project.title}, {year}
								</span>
							) : (
								''
							)}
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}

Footer.propTypes = {
	project: PropTypes.object
};

Footer.defaultProps = {
	project: null
};

export default Footer;
