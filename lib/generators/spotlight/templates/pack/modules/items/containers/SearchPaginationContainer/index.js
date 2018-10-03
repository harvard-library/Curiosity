import React from 'react';
import { compose } from 'react-apollo';

// component
import Pagination from '../../../../components/pagination/Pagination';

// graphql
import itemListQuery from '../../graphql/queries/list';


class SearchPaginationContainer extends React.Component {
	render() {
		let limit = 15;
		let total = 0;

		if (
			this.props.itemListQuery
			&& !this.props.itemListQuery.loading
			&& this.props.itemListQuery.exhibit
		) {
			total = this.props.itemListQuery.exhibit.items.count;
		}

		return (
			<Pagination
				limit={limit}
				total={total}
			/>
		);
	}
}

export default compose(
	itemListQuery,
)(SearchPaginationContainer);
