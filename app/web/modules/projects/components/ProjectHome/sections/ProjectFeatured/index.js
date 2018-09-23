import React from 'react';
import PropTypes from 'prop-types';

import ItemListItem from '../../../../../items/components/ItemListItem';

import './ProjectFeatured.css';

const ProjectFeatured = ({ items }) => {
	let featuredItems = [];

	if (items) {
		featuredItems = items;
	}

	return (
		<section className="projectFeatured">
			{featuredItems.map((item, i) => {
				return <ItemListItem key={`${item.slug}-${i}`} {...item} />;
			})}
		</section>
	);
};

ProjectFeatured.propTypes = {
	items: PropTypes.array
};

ProjectFeatured.defaultProps = {
	items: []
};

export default ProjectFeatured;
