import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// redux
import { libraryCloudRequestApiDataList } from '../../actions';

// component
import Pagination from '../../../../../components/pagination/Pagination';


class BlacklightSearchPaginationContainer extends React.Component {
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
		let limit = 0;
		let total = 0;

		if (
				libraryCloudData
			&& libraryCloudData.list
			&& libraryCloudData.list.pagination
		) {
			total = libraryCloudData.list.pagination.numFound;
			limit = libraryCloudData.list.pagination.limit;
		}

		return (
			<Pagination
				limit={limit}
				total={total}
			/>
		);
	}
}

BlacklightSearchPaginationContainer.propTypes = {
	libraryCloudData: PropTypes.object,
};

const mapStateToProps = state => ({ libraryCloudData: state.libraryCloudData });


const mapDispatchToProps = dispatch => ({
	dispatchRequestApiDataList: () => {
		dispatch(libraryCloudRequestApiDataList());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(BlacklightSearchPaginationContainer);
