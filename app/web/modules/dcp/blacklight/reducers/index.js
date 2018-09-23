import { LIBRARYCLOUD_RECEIVE_API_DATA_LIST, LIBRARYCLOUD_RECEIVE_API_DATA_DETAIL } from '../actions';

export default (state = {}, { type, data }) => {
	switch (type) {
	case LIBRARYCLOUD_RECEIVE_API_DATA_LIST:
		return { list: data };
	case LIBRARYCLOUD_RECEIVE_API_DATA_DETAIL:
		return { detail: data };
	default:
		return state;
	}
};
