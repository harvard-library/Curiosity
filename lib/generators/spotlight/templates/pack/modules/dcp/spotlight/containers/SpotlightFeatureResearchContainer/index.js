import React from 'react';
import { compose } from 'react-apollo';
//import { withRouter } from 'react-router';

import SpotlightFeatureResearch from '../../components/SpotlightFeatureResearch';
import featureQuery from '../../graphql/queries/feature';


const SpotlightFeatureResearchContainer = props => {


	let features = [];
	let content = [];
	let heading = [];

	if (
				props.featureQuery
			&& props.featureQuery.page
		) {
		features = props.featureQuery.page;
		content = JSON.parse(features.content);
		heading = content.data[0].data.text;
	}


	return (
		<SpotlightFeatureResearch
			features={features}
			content={content}
			heading={heading}
		//	{...props.router.location.query}
		/>
	);
};

export default compose(
	featureQuery,
//	withRouter,
)(SpotlightFeatureResearchContainer);
