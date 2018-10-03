import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Cover from '../../../../components/common/cover/Cover';
import CoverTitle from '../../../../components/common/cover/CoverTitle';
import BackgroundImage from '../../../../components/common/cover/BackgroundImage';

const ArticleCover = props => {
	const artImages = [
		3,
		16,
		19,
		22,
		31,
		34,
		35,
		38,
		42,
		43,
		44,
		47,
		48,
		58,
		70,
		83,
		87,
		90,
		92,
		93,
		95,
		102,
		103
	];
	const selImage = _.sample(artImages);

	return (
		<Cover
			className="collections-cover"
			background={
				<BackgroundImage
					src={`//iiif.orphe.us/hul/art/${selImage}.jpg/full/1400,/0/default.jpg`}
				/>
			}
			bottom
		>
			<CoverTitle title={props.title} />
		</Cover>
	);
};

ArticleCover.propTypes = {
	title: PropTypes.string.isRequired
};

export default ArticleCover;
