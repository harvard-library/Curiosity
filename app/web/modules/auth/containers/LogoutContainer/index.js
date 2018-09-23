import React from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logoutUser } from '../../../../lib/auth';
import { logout } from '../../actions';

const LogoutContainer = props => {
	return (
		<div
			style={{
				width: '90%',
				maxWidth: '800px',
				margin: '0 auto',
				padding: '120px 0',
				textAlign: 'center'
			}}
		>
			<p>Log out of the project</p>
			<button onClick={props.dispatchLogout}>Log out</button>
		</div>
	);
};

const mapStateToProps = state => ({
	authMode: state.auth.authMode
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchLogout: () => {
		dispatch(logout(logoutUser));
		// window.location = '/auth';
	}
});

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(LogoutContainer);
