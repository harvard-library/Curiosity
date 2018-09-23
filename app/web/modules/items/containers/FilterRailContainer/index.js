import React from 'react';
import { compose } from 'react-apollo';

// component
import FilterRail from '../../components/FilterRail';

// graphql
import itemListQuery from '../../graphql/queries/list';


class FilterRailContainer extends React.Component {
	render() {
		let facets = null;

		if (
			this.props.itemListQuery
			&& !this.props.itemListQuery.loading
			&& this.props.itemListQuery.exhibit
		) {
			facets = this.props.itemListQuery.exhibit.items.facets;
		}

		return (
			<FilterRail
				facets={facets}
			/>
		);
	}
}

export default compose(
	itemListQuery,
)(FilterRailContainer);
