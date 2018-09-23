import { SET_ITEM_LIST_VIEW_TYPE } from '../actions';

export default (state = {}, { type, itemListViewType }) => {
	switch (type) {
	case SET_ITEM_LIST_VIEW_TYPE:
		return { itemListViewType, };
	default:
		return state;
	}
};
