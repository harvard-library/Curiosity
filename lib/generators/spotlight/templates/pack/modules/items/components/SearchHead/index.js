import React from 'react';
// import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { DebounceInput } from 'react-debounce-input';
import { withRouter } from 'react-router';
import autoBind from 'react-autobind';

// Maker location date

import './SearchHead.css';

class SearchHead extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
		autoBind(this);
	}

	handleChangeFilters(event, index, values) {
		const query = Object.assign({}, this.props.router.location.query);
		query.filter = values;
		query.page = 1;

		this.props.router.push({ pathname: '/search', query });
	}

	filterMenu(filterValues) {
		let filters = [];
		return filters.map(name => (
			<MenuItem
				key={name}
				insetChildren={true}
				checked={filterValues && filterValues.indexOf(name) > -1}
				value={name}
				primaryText={name}
			/>
		));
	}

	updateFilter(e) {
		const query = Object.assign({}, this.props.router.location.query);
		query.textsearch = e.target.value;
		query.page = 1;

		this.props.router.push({ pathname: '/search', query });
	}

	render() {
		let defaultValue = '';
		if (this.props.router.location.query.textsearch) {
			defaultValue = this.props.router.location.query.textsearch;
		}

		// const fields = this.props.router.location.query;

		return (
			<div className="searchHead">
				<div className="searchInputOuter">
					<i className="mdi mdi-magnify mdi-36px searchIcon" />
					<DebounceInput
						type="text"
						placeholder="Search . . ."
						minLength={3}
						debounceTimeout={300}
						onChange={this.updateFilter}
						value={defaultValue}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchHead);
