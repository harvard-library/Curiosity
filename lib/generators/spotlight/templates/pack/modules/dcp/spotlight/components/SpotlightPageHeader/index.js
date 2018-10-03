import React from 'react';

import './SpotlightPageHeader.scss';

const SpotlightPageHeader = ({ exhibit }) => {
	let featuredImageSrc = '/images/asian-rubbings-cover.jpg';

	if (exhibit.featured_image) {
		featuredImageSrc = exhibit.featured_image;
	}

	return (
		<div
			className="hl__page-header"
			style={{
				backgroundImage: `url(${featuredImageSrc})`,
			}}
		>
			<div className="hl__page-header__background-screen" />
			<div className="hl__page-header__container">
				<h1 className="hl__page-title exhibit-title">{exhibit.title}</h1>
				<h3 className="hl__page-subtext">{exhibit.description}</h3>
			</div>
		</div>
	);
}


export default SpotlightPageHeader;
