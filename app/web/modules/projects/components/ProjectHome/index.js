import React from 'react';
import _ from 'underscore';

import ProjectHeaderContainer from '../../containers/ProjectHeaderContainer';
import ProjectFooterContainer from '../../containers/ProjectFooterContainer';
import ProjectCoverContainer from '../../containers/ProjectCoverContainer';

import ProjectAbout from './sections/ProjectAbout';
import ProjectCollections from './sections/ProjectCollections';
import ProjectFeatured from './sections/ProjectFeatured';
import ProjectPeople from './sections/ProjectPeople';
import ProjectVisit from './sections/ProjectVisit';

import ReleaseMessage from '../../../../components/common/ReleaseMessage';

import './ProjectHome.css';
import '../../../home/components/Home/Home.css';

const ProjectHome = props => {
	// get featured items
	let featuredItems = [];
	if (props.featuredItems) {
		featuredItems = props.featuredItems;
	} else if (props.items) {
		const items = props.items.slice();
		_.range(0, 3).forEach(i => {
			const selectedItem = _.sample(items);
			if (selectedItem) {
				featuredItems.push(selectedItem);
				items.splice(items.findIndex(item => item._id === selectedItem._id), 1);
			}
		});
	}

	// get featured collections
	let featuredCollections = [];
	if (props.featuredCollections) {
		featuredCollections = props.featuredCollections;
	} else if (props.collections) {
		const collections = props.collections.slice();
		_.range(0, 3).forEach(i => {
			const selectedCollection = _.sample(collections);
			if (selectedCollection) {
				featuredCollections.push(selectedCollection);
				collections.splice(
					collections.findIndex(
						collection => collection._id === selectedCollection._id
					),
					1
				);
			}
		});
	}

	return (
		<div id="home" className="projectHome">
			{/* Header */}
			<ProjectHeaderContainer />

			{/* Project home content */}
			<ProjectCoverContainer />
			<ProjectFeatured items={featuredItems} />
			<ProjectAbout description={props.description} />
			<ProjectCollections collections={featuredCollections} />
			<ProjectPeople people={props.users} />
			<ProjectVisit
				title={props.title}
				email={props.email}
				url={props.url}
				address={props.address}
				phone={props.phone}
			/>

			{/* Footer */}
			<ProjectFooterContainer />
			<ReleaseMessage />
		</div>
	);
};

export default ProjectHome;
