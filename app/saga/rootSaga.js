import { takeEvery, takeLatest } from "redux-saga";

import constants from "../data/constants";
import {
	doFetchRates,
	doFetchRateHistory
} from "./workers/currencyRatesWorkers";

/**
 * Root saga 'listens' to all actions fires and delegates which actions must be handled
 * by saga middleware after passing through reducers
 * @yield {function*}
 */
function* rootSaga() {
	yield [
		takeLatest(constants.FETCH_RATES, doFetchRates),
		takeEvery(constants.FETCH_RATE_HISTORY, doFetchRateHistory)
	]
}

export default rootSaga;
