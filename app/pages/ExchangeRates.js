import React from "react";
import { connect } from "react-redux";

import AutoSuggest from "../components/AutoSuggest";
import DatePick from "../components/DatePick";
import Rates from "../components/Rates";
import mapDispatchToProps from "../data/mapDispatchToProps";
import mapStateToProps from "../data/mapStateToProps";

class ExchangeRates extends React.Component {
	handleSubmit() {
		const { autosuggest, date } = this.props;
		if (autosuggest.value !== "" && date !== "")
			this.props.fetchRatesAction(autosuggest.value, date.format("Y-MM-DD"));
		else
			this.props.fetchRatesErrorAction("Both day and base inputs needed");
	}

	render() {
		const { currency } = this.props;

		return (
			<div className="content">
				<div id="rates">
					<div className="inputs">
						<DatePick />
						<AutoSuggest />
						<button className="submitBtn" onClick={this.handleSubmit.bind(this)}>GO!</button>
					</div>
					<div className="rates">
						{(currency.error === "") ? "" : <div className="error-mssg">{currency.error}</div>}
						{(currency.fetching)
						? <img src="/assets/loader.gif" alt="loading" className="loader" />
						: (currency.rates.length !== 0)
							? <Rates />
							: ""}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
