import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs-lite';
import autoBind from 'react-autobind';
import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';

// redux
import { setItemListViewType } from '../../../../../../items/actions';

// components
import SpotlightPageHeaderContainer from '../../../../containers/SpotlightPageHeaderContainer';
import SpotlightToolbarContainer from '../../../../containers/SpotlightToolbarContainer';
import SpotlightSearchResultsContainer from '../../../../containers/SpotlightSearchResultsContainer';

import './HomeCover.scss';

class HomeCover extends React.Component {

	constructor(props) {
		super(props);
		let searchTextInput = '';

		const queryParams = qs.parse(window.location.search.replace('?', ''));
		if (queryParams.subject) {
			searchTextInput = queryParams.subject;
		}

		this.state = {
			searchTextInput,
		};
		autoBind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		let searchTextInput = '';

		const queryParams = qs.parse(window.location.search.replace('?', ''));
		if (queryParams.subject) {
			searchTextInput = queryParams.subject;
		}
		if (searchTextInput !== prevState.searchTextInput) {
			this.setState({
				searchTextInput,
			});
		}
	}

	handleSearchTextInput(e) {
		const query = qs.parse(window.location.search.replace('?', ''));
		this.props.router.push({
			pathname: window.location.pathname,
			query: {
				...query,
				subjects: e.target.value,
				page: 1,
			},
		});
	}

	render() {
		const { itemListViewType } = this.props;

		return (
			<div>
				<SpotlightPageHeaderContainer
					params={{
						exhibitSlug: this.props.router.params.exhibitSlug,
					}}
				/>

				<SpotlightToolbarContainer
					params={{
						exhibitSlug: this.props.router.params.exhibitSlug,
					}}
				/>

				<Grid>
					<Row className="hl__searchRow row">
						<Col md={3} lg={3}>

						</Col>

						<Col className="hl__searchCol" md={5} lg={5}>
							<div className="hl__searchContainer">
								<div className="hl__searchInputOuter">
									<i className="mdi mdi-magnify mdi-24px hl__searchIcon" />
									<DebounceInput
										type="text"
										placeholder="Search this collection"
										minLength={3}
										debounceTimeout={300}
										onChange={this.handleSearchTextInput}
									/>
								</div>

							</div>
						</Col>

						<Col md={4} lg={4} className="hl__advancedFilter__container">
							<span className="hl__advancedFilter__label">
								Advanced Search
							</span>
							<div className="hl__collectionViewIcons">
								<button
									className={`hl__collectionViewIcon gridIcon ${itemListViewType === 'grid' ? 'collectionViewIconActive' : ''}`}
									onClick={this.props.dispatchSetItemListViewType.bind(this, 'grid')}
									aria-label="show grid view"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
										<path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
									</svg>
								</button>

								<button
									className={`hl__collectionViewIcon ${itemListViewType === 'list' ? 'collectionViewIconActive' : ''}`}
									onClick={this.props.dispatchSetItemListViewType.bind(this, 'list')}
									aria-label="show list view"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<g>
											<g transform="translate(-1517 -653)">
												<path d="M1517 670v-3h10.9v3zm0 7v-3h10.9v3zm0-14v-3h10.9v3zm0-10h10.9v3H1517zm13.1 17v-3h10.9v3zm-.1 7v-3h10.9v3zm.1-14v-3h10.9v3zm0-10h10.9v3h-10.9z"></path>
											</g>
										</g>
									</svg>
								</button>

								<button
									className={`hl__collectionViewIcon ${itemListViewType === 'masonry' ? 'collectionViewIconActive' : ''}`}
									onClick={this.props.dispatchSetItemListViewType.bind(this, 'masonry')}
									aria-label="show masonry view"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<g>
											<g transform="translate(-1468 -653)">
												<path d="M1468 666v-13h11v13zm0 11v-8h11v8zm13 0v-13h11v13zm0-24h11v8h-11z"></path>
											</g>
										</g>
									</svg>
								</button>
							</div>
						</Col>
					</Row>

					<SpotlightSearchResultsContainer
						params={{
							exhibitSlug: this.props.router.params.exhibitSlug,
						}}
					/>
				</Grid>

			</div>

		);
	}
}

HomeCover.propTypes = {
	itemListViewType: PropTypes.string,
};

HomeCover.defaultProps = {
	itemListViewType: 'grid',
};

const mapStateToProps = state => ({
	itemListViewType: state.item.itemListViewType,
});

const mapDispatchToProps = dispatch => ({
	dispatchSetItemListViewType: (type) => {
		dispatch(setItemListViewType(type));
	},
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(HomeCover);
