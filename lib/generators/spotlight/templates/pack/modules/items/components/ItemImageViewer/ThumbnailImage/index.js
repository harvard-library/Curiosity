import React from 'react';
import ReactPlayer from 'react-player';

import './ThumbnailImage.css';

const ThumbnailImage = ({ file, isActiveImage, setActiveFile }) => {
	let viewer = <div />;

	if (!file) {
		return null;
	}

	const fileType = file.type || '';
	const isImage = fileType.slice(0, fileType.indexOf('/')) === 'image';

	if (isImage) {
		const src = `//iiif.orphe.us/${file.name}/square/60,/0/default.jpg`;

		viewer = (
			<img
				className={`
					thumbnailImage
					${isActiveImage ? 'isActiveImage' : ''}
				`}
				alt={file.title}
				src={src}
				onClick={setActiveFile.bind(this, file)}
			/>
		);
	} else {
		viewer = (
			<div
				className={`
					thumbnailImage
					${isActiveImage ? 'isActiveImage' : ''}
				`}
				onClick={setActiveFile.bind(this, file)}
			>
				<ReactPlayer
					url={`https://s3.amazonaws.com/iiif-orpheus/${file.name}`}
					width="60"
					height="60"
					style={{
						background: '#424242'
					}}
				/>
			</div>
		);
	}

	return viewer;
};

export default ThumbnailImage;
