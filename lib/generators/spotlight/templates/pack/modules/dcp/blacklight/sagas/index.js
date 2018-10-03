import { call, put, takeLatest } from 'redux-saga/effects';

import {
	LIBRARYCLOUD_REQUEST_API_DATA_LIST, libraryCloudReceiveApiDataList,
	LIBRARYCLOUD_REQUEST_API_DATA_DETAIL, libraryCloudReceiveApiDataDetail,
} from '../actions';
import { fetchDataList, fetchDataDetail, } from '../api';


function* getApiDataList(action) {
	try {
    // do api call
		const data = yield call(fetchDataList, action);
		yield put(libraryCloudReceiveApiDataList(data));
	} catch (e) {
		console.log(e);
	}
}

function* getApiDataDetail(action) {
	try {
    // do api call
		const data = yield call(fetchDataDetail, action.id);
		yield put(libraryCloudReceiveApiDataDetail(data));
	} catch (e) {
		console.log(e);
	}
}


/*
Alternatively you can use takeLatest.

Does not allow concurrent fetches of user. If "USER_FETCH_LIBRARYCLOUD_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cncelled and only the latest one will be run.
*/

function* libraryCloudSagaDataDetail() {
	yield takeLatest(LIBRARYCLOUD_REQUEST_API_DATA_DETAIL, getApiDataDetail);
}

function* libraryCloudSagaDataList() {
	yield takeLatest(LIBRARYCLOUD_REQUEST_API_DATA_LIST, getApiDataList);
}


export default function *rootSaga() {
	yield [
		libraryCloudSagaDataDetail(),
		libraryCloudSagaDataList(),
	]
}
