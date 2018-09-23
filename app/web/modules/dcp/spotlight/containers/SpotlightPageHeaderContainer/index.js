import React from 'react';
import { compose } from 'react-apollo';

// graphql
import exhibitDetailQuery from '../../graphql/queries/exhibit';

// component
import SpotlightPageHeader from '../../components/SpotlightPageHeader';


const SpotlightPageHeaderContainer = props => {
	let exhibit = null;

	if (
			props.exhibitDetailQuery
		&& props.exhibitDetailQuery.exhibit
	) {
		exhibit = props.exhibitDetailQuery.exhibit;
	}

	if (!exhibit) {
		return null;
	}

	return (
		<SpotlightPageHeader
			exhibit={exhibit}
    />
	);
};

export default compose(
  exhibitDetailQuery,
)(SpotlightPageHeaderContainer);
