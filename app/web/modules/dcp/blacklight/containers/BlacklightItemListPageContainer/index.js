import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// redux
import { libraryCloudRequestApiDataList } from '../../actions';

// component
import BlacklightItemListPage from '../../components/BlacklightItemListPage';


class BlacklightItemListPageContainer extends React.Component {
	componentDidMount() {
		this.props.dispatchRequestApiDataList();
	}

	componentDidUpdate(prevProps) {
		if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
			this.props.dispatchRequestApiDataList();
		}
	}

	render() {
		const { libraryCloudData } = this.props;
		let itemsCount = 0;
		let total = 0;
		let start = 0;

		if (
				libraryCloudData.list
			&& libraryCloudData.list.items
			&& libraryCloudData.list.items.mods
		) {
			itemsCount = libraryCloudData.list.items.mods.length;
			total = libraryCloudData.list.pagination.numFound;
			start = libraryCloudData.list.pagination.start + 1;
		}

		return (
			<BlacklightItemListPage
				itemsCount={itemsCount}
				total={total}
				start={start}
			/>
		);
	}
}

BlacklightItemListPageContainer.propTypes = {
	libraryCloudData: PropTypes.object,
};

const mapStateToProps = state => ({ libraryCloudData: state.libraryCloudData });

const mapDispatchToProps = dispatch => ({
	dispatchRequestApiDataList: () => {
		dispatch(libraryCloudRequestApiDataList());
	},
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
)(BlacklightItemListPageContainer);
