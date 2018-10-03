export const REQUEST_API_DATA_LIST = "REQUEST_API_DATA_LIST";
export const RECEIVE_API_DATA_LIST = "RECEIVE_API_DATA_LIST";
export const REQUEST_API_DATA_DETAIL = "REQUEST_API_DATA_DETAIL";
export const RECEIVE_API_DATA_DETAIL = "RECEIVE_API_DATA_DETAIL";
export const REQUEST_API_DATA_FEATURE = "REQUEST_API_DATA_FEATURE";
export const RECEIVE_API_DATA_FEATURE = "RECEIVE_API_DATA_FEATURE";

export const requestApiDataList = (slug) => ({ type: REQUEST_API_DATA_LIST, slug });
export const receiveApiDataList = data => ({ type: RECEIVE_API_DATA_LIST, data });
export const requestApiDataDetail = (id) => ({ type: REQUEST_API_DATA_DETAIL, id });
export const receiveApiDataDetail = data => ({ type: RECEIVE_API_DATA_DETAIL, data });
export const requestApiDataFeature = () => ({ type: REQUEST_API_DATA_FEATURE });
export const receiveApiDataFeature = data => ({ type: RECEIVE_API_DATA_FEATURE, data });
