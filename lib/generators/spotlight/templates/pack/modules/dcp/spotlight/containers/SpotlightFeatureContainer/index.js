import React from 'react';
import { compose } from 'react-apollo';

// component
import SpotlightFeature from '../../components/SpotlightFeature';

// graphql
import featureQuery from '../../graphql/queries/feature';

// lib
import sirTrevorToHTML from '../../lib/sirTrevorToHTML';


const SpotlightFeatureContainer = props => {
	let page = null;

	if (
				props.featureQuery
			&& props.featureQuery.page
		) {
		page = Object.assign({}, props.featureQuery.page);
		page.content = JSON.parse(page.content);
		page.html = sirTrevorToHTML(page.content);
	}


	return (
		<SpotlightFeature
			page={page}
		/>
	);
};

export default compose(
	featureQuery,
)(SpotlightFeatureContainer);
