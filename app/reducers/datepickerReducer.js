import constants from "../data/constants";

export default function date(date="", action) {
	switch (action.type) {
		case constants.UPDATE_DATEPICKER:
			return action.date;
		default:
			return date;
	}
}