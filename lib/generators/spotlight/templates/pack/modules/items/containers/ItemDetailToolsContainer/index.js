import React from 'react';
import { compose } from 'react-apollo';
//import { withRouter } from 'react-router';

// graphql
import itemBreadcrumbQuery from '../../graphql/queries/breadcrumb';

// component
import ItemDetailTools from '../../components/ItemDetailTools';


class ItemDetailToolsContainer extends React.Component {


	render() {
		let item = {};

		if (
			this.props.itemBreadcrumbQuery
			&& !this.props.itemBreadcrumbQuery.loading
			&& this.props.itemBreadcrumbQuery.exhibit
		) {
			item = this.props.itemBreadcrumbQuery.exhibit;

		}

		return (
			<ItemDetailTools
				item={item}
				{...this.props}
			/>
		);
	}
}

export default compose(
	itemBreadcrumbQuery,
//	withRouter,
)(ItemDetailToolsContainer);
