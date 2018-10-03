import React from 'react';

import CollectionCover from '../../../collections/components/CollectionCover';

import './AboutPage.css';

const AboutPage = () => {
	return (
		<div>
			<CollectionCover title="About orphe.us" coverBricks />
			<section className="pageContent">
				<p>
					orphe.us reimagines the purpose of an archive in a digital medium,
					where all (or at least many) things may be remembered. It is a tool
					for creating and managing digital collections and sharing them with
					our community.
				</p>
				<p>
					orphe.us is currently under active development and in alpha release.
				</p>
			</section>
		</div>
	);
};

export default AboutPage;
