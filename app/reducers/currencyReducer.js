import update from "immutability-helper";
import constants from "../data/constants";

/*
CURRENCY OBJECT STRUCTURE
{
	fetching: true|false,
	base: "USD|GBP|AUS...",
	error: ""|"Invalid ...",
	rates: [
		["USD", 1.23421, {
			fetching: true|false,
			active: true|false,
			error: ""|"Invalid ...",
			rates: [
				{date: "2016-07-11", rate: 1.28476},
				{date: "2016-06-11", rate: 1.87476},
				...
			]
		}],
		["GBP", 31.5421],
		...
	]
}
*/

/**
 * Toggle state of fetching parameter
 * @param  {Object} currency Current state
 * @return {Obejct}          New state
 */
function toggleFetchState(currency, action) {
	return update(currency, {
		fetching: { $set: true },
		error: { $set: "" },
		base: { $set:  action.base }
	});
}

/**
 * Convert object to 2D matrix
 * @param  {Object} obj
 * @return {Array}
 */
function convertObjectToArrayOfArrays(obj) {
	return Object.keys(obj).map((k) => [k, obj[k]]);
}

function handleFetchRatesSuccess(currency, action) {
	return update(currency, {
		fetching: { $set: false },
		error: { $set: "" },
		rates: { $set: convertObjectToArrayOfArrays(action.rates) }
	});
}

/**
 * Set fetch rates error maessage
 * @param  {Object} currency
 * @param  {Object} action
 * @return {Object}
 */
function handleFetchRateError(currency, action) {
	return update(currency, {
		fetching: { $set: false },
		error: { $set: action.message }
	})
}

/**
 * Function updates specific rates array, pushing a new object to the
 * array which houses 12 month rates data. In this case just sets 'fetching'
 * and 'active' to true
 * @param {Object} currency
 * @param {Object} action
 */
function setFetchingRateHistory(currency, action) {
	const idx = currency.rates.findIndex((r) => r[0] == action.symbol);
	let history = {
		fetching: true,
		active: true,
		rates: []
	}
	return update(currency, {
		rates: { 
			[idx]: { $push: [history] }
		}
	})
}

/**
 * Handle a successful fetch rate history, add history array of objects
 * to respective currency rate
 * @param  {Object} currency
 * @param  {Object} action
 * @return {Object}
 */
function handleFetchRateHistorySuccess(currency, action) {
	const idx = currency.rates.findIndex((r) => r[0] == action.symbol);
	return update(currency, {
		rates: {
			[idx]: { $splice: [[2, 1, action.history]] }
		}
	})
}

/**
 * Handle fetch rate history error, add error string
 * @param  {Object} currency
 * @param  {Object} action
 * @return {Object}
 */
function handleFetchRateHistoryError(currency, action) {
	const idx = currency.rates.findIndex((r) => r[0] == action.symbol);
	return update(currency, {
		rates: {
			[idx]: {
				[2]: {
					fetching: { $set: false },
					error: { $set: action.message }
				}
			}
		}
	})
}

/**
 * Toggle expand history panel
 * @param  {Object} currency
 * @param  {Object} action
 * @return {Object}
 */
function toggleExpandRateHistory(currency, action) {
	const idx = currency.rates.findIndex((r) => r[0] == action.symbol);
	return update(currency, {
		rates: {
			[idx]: {
				[2]: {
					active: { $apply: (value) => !value }
				}
			}
		}
	})
}

export default function currency(currency={}, action) {
	switch (action.type) {
		case constants.FETCH_RATES:
			return toggleFetchState(currency, action);
		case constants.FETCH_RATES_SUCCESS:
			return handleFetchRatesSuccess(currency, action);
		case constants.FETCH_RATES_ERROR:
			return handleFetchRateError(currency, action);
		case constants.FETCH_RATE_HISTORY:
			return setFetchingRateHistory(currency, action);
		case constants.FETCH_RATE_HISTORY_SUCCESS:
			return handleFetchRateHistorySuccess(currency, action);
		case constants.FETCH_RATE_HISTORY_ERROR:
			return handleFetchRateHistoryError(currency, action);
		case constants.TOGGLE_RATE_HISTORY:
			return toggleExpandRateHistory(currency, action);
		default:
			return currency;
	}
}
