import axios from "axios";

export default {
	fetchRates: (action) => (
		axios(`http://api.fixer.io/${action.date}?base=${action.base}`)
	),

	fetchRateHistory: (action, date) => (
		axios(`http://api.fixer.io/${date}?base=${action.base}&symbols=${action.symbol}`)	
	)
}