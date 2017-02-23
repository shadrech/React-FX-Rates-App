import { combineReducers } from "redux";

import currency from "./currencyReducer";
import autosuggest from "./autosuggestReducer";
import date from "./datepickerReducer";

export default combineReducers({
	currency,
	autosuggest,
	date
});