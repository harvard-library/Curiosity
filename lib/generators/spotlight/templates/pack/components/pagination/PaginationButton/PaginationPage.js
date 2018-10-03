import React from 'react';
import { Link, withRouter } from 'react-router';

const PaginationPage = props => (
	<Link
		to={{
			pathname: window.location.pathname,
			query: {
				...props.location.query,
				page: props.page,
			},
		}}
	>
		<span>
			{props.page}
		</span>
	</Link>
);


export default withRouter(PaginationPage);
