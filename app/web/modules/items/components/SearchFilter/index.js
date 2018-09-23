import React from 'react';
import _s from 'underscore.string';
import { Link, withRouter } from 'react-router';

import './SearchFilter.css';

const SearchFilter = props => {
	const filter = props.router.location.query;
	const fields = [];

	for (const key in filter) {
		if (!~['page', 'textsearch'].indexOf(key)) {
			fields.push({
				key,
				value: filter[key]
			});
		}
	}

	return (
		<div className="searchFilter">
			{fields.map(field => {
				const query = Object.assign({}, props.router.location.query);
				delete query[field.key];
				query.page = 1;

				return (
					<Link
						className="searchFilterField"
						key={field.key}
						to={{
							pathname: '/search',
							query
						}}
					>
						<label>{_s.capitalize(field.key)}</label>
						<span>{field.value}</span>
						<i className="mdi mdi-close" />
					</Link>
				);
			})}
		</div>
	);
};

export default withRouter(SearchFilter);
