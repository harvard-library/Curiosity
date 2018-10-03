import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import bricks from './bricks';
import leftMenu from './leftMenu';
import client from '../middleware/apolloClient';

import authReducers from '../modules/auth/reducers';
import spotlightData from '../modules/dcp/spotlight/reducers';
import libraryCloudData from '../modules/dcp/blacklight/reducers';
import itemReducers from '../modules/items/reducers';


import * as ActionTypes from '../actions';

const errorMessage = (state = null, action) => {
	const { type, error } = action;

	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return null;
	} else if (error) {
		return error;
	}

	return state;
};

const rootReducer = combineReducers({
	form: formReducer,
	errorMessage,
	routing: routerReducer,
	bricks,
	leftMenu,
	auth: authReducers
});

export default rootReducer;
