import React from 'react';
//import { compose } from 'react-apollo';
//import { withRouter } from 'react-router';
import repositories from '../../lib/repositories';
import BlacklightRepositoriesList from '../../components/BlacklightRepositoriesList';



const BlacklightRepositoriesListContainer = props => {


/*	if (
				props.featureQuery
			&& props.featureQuery.page
		) {
		features = props.featureQuery.page;
		content = JSON.parse(features.content);
		heading = content.data[0].data.text;
	}
*/

	return (
		<BlacklightRepositoriesList
			repositories={repositories}
		//	{...props.router.location.query}
		/>
	);
};

export default BlacklightRepositoriesListContainer;
//	featureQuery,
//	withRouter,
