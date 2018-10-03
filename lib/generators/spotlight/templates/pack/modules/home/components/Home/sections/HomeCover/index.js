import React from 'react';

import Cover from '../../../../../../components/common/cover/Cover';
import Bricks from '../../../../../../components/common/cover/Bricks';
import './HomeCover.css';

class HomeCover extends React.Component {
	render() {
		return (
			<Cover
				className="home-cover"
				background={<Bricks />}
				overlay={<div className="home-overlay" />}
				reactsToMouse
				left
				full
			>
				<div className="home-cover-content">
					<h1>HUL Spotlight Frontend </h1>
				</div>
			</Cover>
		);
	}
}

export default HomeCover;
