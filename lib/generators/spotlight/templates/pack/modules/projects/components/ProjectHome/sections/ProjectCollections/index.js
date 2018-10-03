import React from 'react';
import PropTypes from 'prop-types';

import CollectionListItem from '../../../../../collections/components/CollectionListItem';
import Button from '../../../../../../components/common/buttons/Button';

import './ProjectCollections.css';

class ProjectCollections extends React.Component {
	render() {
		const { collections } = this.props;

		if (!collections || !collections.length) {
			return null;
		}

		return (
			<div className="projectCollections">
				<h2>Collections</h2>
				{collections.map((collection, i) => (
					<CollectionListItem key={`${collection.slug}-${i}`} {...collection} />
				))}
				<div className="projectCollectionsViewMoreOuter">
					<Button transparentLight to="/collections" outline>
						View All Collections
					</Button>
				</div>
			</div>
		);
	}
}

ProjectCollections.propTypes = {
	collections: PropTypes.array
};

ProjectCollections.defaultProps = {
	collections: []
};

export default ProjectCollections;
