import { call, put, takeLatest } from 'redux-saga/effects';

import {
	REQUEST_API_DATA_LIST, receiveApiDataList,
	REQUEST_API_DATA_DETAIL, receiveApiDataDetail,
	REQUEST_API_DATA_FEATURE, receiveApiDataFeature,
} from '../actions';
import { fetchDataList, fetchDataDetail, fetchDataFeature } from '../api';


function* getApiDataList(action) {
	try {
    // do api call
		const data = yield call(fetchDataList, action.slug);
		yield put(receiveApiDataList(data));
	} catch (e) {
		console.log(e);
	}
}

function* getApiDataDetail(action) {
	try {
    // do api call
		const data = yield call(fetchDataDetail, action.id);
		yield put(receiveApiDataDetail(data));
	} catch (e) {
		console.log(e);
	}
}

function* getApiDataFeature(action) {
	try {
    // do api call
		const data = yield call(fetchDataFeature);
		yield put(receiveApiDataFeature(data));
	} catch (e) {
		console.log(e);
	}
}

/*
Alternatively you can use takeLatest.

Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets dispatched while a fetch is already pending, that pending fetch is cncelled and only the latest one will be run.
*/

function* spotlightSagaDataDetail() {
	yield takeLatest(REQUEST_API_DATA_DETAIL, getApiDataDetail);
}

function* spotlightSagaDataList() {
	yield takeLatest(REQUEST_API_DATA_LIST, getApiDataList);
}

function* spotlightSagaDataFeature() {
	yield takeLatest(REQUEST_API_DATA_FEATURE, getApiDataFeature);
}

export default function *rootSaga() {
	yield [
		spotlightSagaDataDetail(),
		spotlightSagaDataList(),
		spotlightSagaDataFeature(),
	]
}
