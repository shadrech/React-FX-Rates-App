import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import mapDispatchToProps from "../data/mapDispatchToProps";
import mapStateToProps from "../data/mapStateToProps";
import currency from "../data/currency";
import Rate from "./Rate";

class Rates extends React.Component {
	render() {
		const base = this.props.currency.base;
		const title = currency[currency.findIndex((cur) => cur.code == base)].name.toUpperCase();
		let rates = this.props.currency.rates.map((rate, i) => 
			<Rate key={i} base={base} rate={rate} />
		);

		return (
			<div className="rates-wrapper">
				<h1 className="rates_base">{`${title} RATES`}</h1>
				<div className="rates-list">
					<ReactCSSTransitionGroup
						transitionName="rate_transition"
						transitionAppear={true}
      					transitionAppearTimeout={500}
		        		transitionEnter={false}
		        		transitionLeave={false}
					>
						{rates}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rates);
