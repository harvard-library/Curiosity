import React from 'react';
import { compose } from 'react-apollo';

// graphql
import exhibitDetailQuery from '../../graphql/queries/exhibit';

// component
import SpotlightToolbar from '../../components/SpotlightToolbar';


const SpotlightToolbarContainer = props => {
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
		<SpotlightToolbar
			exhibit={exhibit}
    />
	);
};

export default compose(
  exhibitDetailQuery,
)(SpotlightToolbarContainer);
