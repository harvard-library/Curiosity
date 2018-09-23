import React from 'react';
import Header from '../../../../components/navigation/Header';
import Footer from '../../../../components/navigation/Footer';
import HomeCover from './sections/HomeCover';

import './Home.css';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Header />
				<HomeCover />
				<Footer />
			</div>
		);
	}
}

export default Home;
