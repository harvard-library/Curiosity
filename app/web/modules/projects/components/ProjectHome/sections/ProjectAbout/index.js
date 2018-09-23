import React from 'react';
// import Button from '../../../../../../components/common/buttons/Button';

import './ProjectAbout.css';

export default class ProjectAbout extends React.Component {
	render() {
		const { description } = this.props;

		if (!description) {
			return null;
		}

		return (
			<section className="projectAbout" id="about">
				<h2>About</h2>
				<p>{description}</p>
				{/*
					<Button
					href={'/articles/about'}
					light
					outline
				>
					Read more
				</Button>
				*/}
			</section>
		);
	}
}
