import { call, put } from "redux-saga/effects";
import moment from "moment"

import Api from "../../api/Api";
import constants from "../../data/constants";

export function* doFetchRates(action) {
	try {
		const response = yield call(Api.fetchRates, action);

		yield put({type: constants.FETCH_RATES_SUCCESS, rates: response.data.rates});
	} catch(e) {
		yield put({type: constants.FETCH_RATES_ERROR, message: e.response.data.error});
	}
}

/**
 * Fetching history info with fixer.io proved to be a bit involved. Process would have
 * been greatly simplified if using API like one provided by https://currencylayer.com,
 * where a time-frame query is available to fetch multiple rates going back in time in
 * one single api call (paid pro/enterprise feature). As fixer.io doesn't have this
 * feature, I utilised ES6 generators to fetch monthly date rates, then after all have
 * been fetched firing teh FETCH_RATE_HISTORY_SUCCESS action which persists the
 * accumulated rates into the currency reducer. ES6 generators fulfil the role of jQuery's
 * $.when feature in a more elegant manor
 * @param {Object} action
 * @yield {Object} Action
 */
export function* doFetchRateHistory(action) {
	try {
		let obj = {fetching: false, active: true, error: "", rates: []},
			response = "",
			date = moment(),
			d = "";

		for (let i = 0; i < 12; i++) {
			d = date.format("YYYY-MM-DD");
			response = yield call(Api.fetchRateHistory, action, d);
			obj.rates.push({
				date: d,
				rate: response.data.rates[action.symbol]
			});

			date.subtract(1, "months");
		}

		yield put({type: constants.FETCH_RATE_HISTORY_SUCCESS, symbol: action.symbol, history: obj});
	} catch(e) {
		yield put({type: constants.FETCH_RATE_HISTORY_ERROR, message: e.response.data.error, symbol: action.symbol});
	}
}