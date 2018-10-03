import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router';

// redux
import { requestApiDataDetail } from '../../../dcp/spotlight/actions';

// graphql
import itemBreadcrumbQuery from '../../graphql/queries/breadcrumb';

// component
import ItemBreadcrumb from '../../components/ItemBreadcrumb';


class ItemBreadcrumbContainer extends React.Component {

	componentDidMount() {
		this.props.dispatchRequestApiDataDetail(this.props.params.id);
	}

	render() {
		const { spotlightData } = this.props;
		let item = {};
		let exhibit = null;

		if (
			spotlightData
			&& spotlightData.response
			&& spotlightData.response.document
		) {
			item = spotlightData.response.document;
		}

		if (
			this.props.itemBreadcrumbQuery
			&& !this.props.itemBreadcrumbQuery.loading
			&& this.props.itemBreadcrumbQuery.exhibit
		) {
			exhibit = this.props.itemBreadcrumbQuery.exhibit;

		}

		if (!item || !exhibit) {
			return null;
		}

		return (
			<ItemBreadcrumb
				item={item}
				exhibit={exhibit}
				{...this.props}
			/>
		);
	}
}

ItemBreadcrumbContainer.propTypes = {
	spotlightData: PropTypes.object,
};

const mapStateToProps = state => ({ spotlightData: state.spotlightData });


const mapDispatchToProps = dispatch => ({
	dispatchRequestApiDataDetail: (id) => {
		dispatch(requestApiDataDetail(id));
	},
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	itemBreadcrumbQuery,
//	withRouter,
)(ItemBreadcrumbContainer);
