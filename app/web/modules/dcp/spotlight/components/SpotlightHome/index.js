import React from 'react';
import HomeCover from './sections/HomeCover';

import './SpotlightHome.scss';

const SpotlightHome = (props) => {

	return (
		<div id="home">
			<HomeCover {...props} />
		</div>
	);
}

export default SpotlightHome;
