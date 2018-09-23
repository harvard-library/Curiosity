import { RECEIVE_API_DATA_LIST, RECEIVE_API_DATA_DETAIL, RECEIVE_API_DATA_FEATURE } from '../actions';

export default (state = {}, { type, data }) => {
	switch (type) {
	case RECEIVE_API_DATA_LIST:
		return data;
	case RECEIVE_API_DATA_DETAIL:
		return data;
	case RECEIVE_API_DATA_FEATURE:
		return data;
	default:
		return state;
	}
};
