import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import qs from 'qs-lite';
import _s from 'underscore.string';

// components
import SearchFilter from '../../../../items/components/SearchFilter';
import FilterRailContainer from '../../../../items/containers/FilterRailContainer';
import ItemListContainer from '../../../../items/containers/ItemListContainer';
import SearchPaginationContainer from '../../../../items/containers/SearchPaginationContainer';

// lib
import parseQueryParamsToFilters from '../../../lib/parseQueryParamsToFilters';


class SpotlightSearchResults extends React.Component {

	render() {
		const { itemsCount, total, start } = this.props;
		const queryParams = qs.parse(window.location.search.replace('?', ''));
		const filters = parseQueryParamsToFilters(queryParams);

		return (
			<Row className="hl__filter-results-row">
				<FilterRailContainer
					params={{
						exhibitSlug: this.props.router.params.exhibitSlug,
					}}
				/>

				<Col md={9} lg={9}>
					<div className="searchInner">
						{filters.length ?
							<div className="searchFiltersWithLabel">
								<label className="searchFiltersLabel">You searched for</label>
								<SearchFilter />
							</div>
						: ''}
						<span className="searchPaginationAndTotalLabel">
							{total && total > 0 ?
								<span>
								Showing <strong>{start}-{start + itemsCount}</strong> of <strong>{_s.numberFormat(total)}</strong> results from your search
								</span>
						:
								<span>
								No results were found from your search
								</span>
						}
						</span>

						<ItemListContainer
							params={{
	  						exhibitSlug: this.props.router.params.exhibitSlug,
	  					}}
						/>

						<SearchPaginationContainer
							params={{
								exhibitSlug: this.props.router.params.exhibitSlug,
							}}
						/>
					</div>
				</Col>
			</Row>
		);
	}
}

export default withRouter(SpotlightSearchResults);
