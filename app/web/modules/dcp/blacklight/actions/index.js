export const LIBRARYCLOUD_REQUEST_API_DATA_LIST = "LIBRARYCLOUD_REQUEST_API_DATA_LIST";
export const LIBRARYCLOUD_RECEIVE_API_DATA_LIST = "LIBRARYCLOUD_RECEIVE_API_DATA_LIST";
export const LIBRARYCLOUD_REQUEST_API_DATA_DETAIL = "LIBRARYCLOUD_REQUEST_API_DATA_DETAIL";
export const LIBRARYCLOUD_RECEIVE_API_DATA_DETAIL = "LIBRARYCLOUD_RECEIVE_API_DATA_DETAIL";

export const libraryCloudRequestApiDataList = () => ({ type: LIBRARYCLOUD_REQUEST_API_DATA_LIST });
export const libraryCloudReceiveApiDataList = data => ({ type: LIBRARYCLOUD_RECEIVE_API_DATA_LIST, data });
export const libraryCloudRequestApiDataDetail = (id) => ({ type: LIBRARYCLOUD_REQUEST_API_DATA_DETAIL, id });
export const libraryCloudReceiveApiDataDetail = data => ({ type: LIBRARYCLOUD_RECEIVE_API_DATA_DETAIL, data });
