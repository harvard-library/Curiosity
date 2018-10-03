import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ReactPlayer from 'react-player';

import './PrimaryImage.css';

const PrimaryImage = ({ file, itemMiradorLink }) => {
	let viewer = <div />;

	if (!file) {
		return null;
	}

	const fileType = file.type || '';
	const isImage = fileType.slice(0, fileType.indexOf('/')) === 'image';

	if (isImage) {
		const src = `//iiif.orphe.us/${file.name}/full/1000,/0/default.jpg`;

		const styles = {
			backgroundImage: `url(${src})`,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		};
		viewer = <div style={styles} className="primaryImage" />;
	} else {
		viewer = (
			<ReactPlayer
				url={`https://s3.amazonaws.com/iiif-orpheus/${file.name}`}
				width="60vw"
				height="90vh"
				controls
				style={{
					margin: '0 auto'
				}}
			/>
		);
	}

	return (
		<div className="primaryImageOuter">
			{viewer}
			{itemMiradorLink ? (
				<Link to={itemMiradorLink} className="viewInMiradorLink">
					<i className="mdi mdi-eye" />
					<span>View in Mirador</span>
				</Link>
			) : (
				''
			)}
		</div>
	);
};

PrimaryImage.propTypes = {
	file: PropTypes.object.isRequired
};

export default PrimaryImage;
