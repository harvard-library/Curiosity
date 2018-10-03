import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// reducers
import rootReducer from '../reducers';
import spotlightSaga from '../modules/dcp/spotlight/sagas';
import libraryCloudSaga from '../modules/dcp/blacklight/sagas';

// middleware
import client from '../middleware/apolloClient';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(sagaMiddleware, thunk, createLogger()),
		),
	);

	sagaMiddleware.run(spotlightSaga);
	sagaMiddleware.run(libraryCloudSaga);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
