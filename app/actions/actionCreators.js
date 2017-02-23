import constants from "../data/constants";

/* AUTOSUGGEST ACTIONS */
	export function updateAutosuggestValueAction(value) {
		return {
			type: constants.UPDATE_SUGGESTION_VALUE,
			value
		}
	}
	export function updateAutosuggestAction(value) {
		return {
			type: constants.UPDATE_SUGGESTIONS,
			value
		}
	}
	export function clearAutosuggestAction() {
		return {
			type: constants.CLEAR_SUGGESTIONS
		}
	}

/* DATEPICKER ACTIONS */
	export function updateDatePickerAction(date) {
		return {
			type: constants.UPDATE_DATEPICKER,
			date
		}
	}

/* RATES ACTIONS */
	export function fetchRatesAction(base, date) {
		return {
			type: constants.FETCH_RATES,
			base,
			date
		}
	}
	export function fetchRatesErrorAction(message) {
		return {
			type: constants.FETCH_RATES_ERROR,
			message
		}
	}

	export function fetchRateHistoryAction(base, symbol) {
		return {
			type: constants.FETCH_RATE_HISTORY,
			base,
			symbol
		}
	}
	export function toggleExpandRateHistoryAction(symbol) {
		return {
			type: constants.TOGGLE_RATE_HISTORY,
			symbol
		}
	}	
