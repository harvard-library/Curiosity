import React from 'react';
import { Link, withRouter } from 'react-router';

const PaginationPrev = props => (
	<Link
		to={{
			pathname: window.location.pathname,
			query: {
				...props.location.query,
				page: (props.location.query.page ? parseInt(props.location.query.page, 10) : 2) - 1,
			},
		}}
	>
		<i className="mdi mdi-chevron-left" />
		<span>
			Previous
		</span>
	</Link>
);


export default withRouter(PaginationPrev);
