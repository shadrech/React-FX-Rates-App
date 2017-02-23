import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import { ArrowSVG, ExpandSVG } from "./SVGs";
import currency from "../data/currency";
import RateHistory from "./RateHistory";
import mapDispatchToProps from "../data/mapDispatchToProps"

class Rate extends Component {
	isActive() {
		const { rate } = this.props;
		return rate.length == 3 && rate[2].active;
	}

	handleExpandToggle() {
		const { rate, base } = this.props;

		if (this.isActive() || rate.length == 3)
			this.props.toggleExpandRateHistoryAction(rate[0]);
		else
			this.props.fetchRateHistoryAction(base, rate[0]);
	}

	render() {
		const { base, rate } = this.props;
		console.log(rate[0]);
		
		return (
			<div className="rate-wrapper">
				<div className="rate" ref="rate">
					<div className="convert-section">
						<p>{base}</p>
						<div className="arrow"><ArrowSVG /></div>
						<p>
							{rate[0]}
							<span>{` (${currency[currency.findIndex((c) => c.code.toUpperCase() == rate[0].toUpperCase())].name})`}</span>
						</p>
					</div>
					<div className="figure-section">
						<p>{rate[1]}</p>
					</div>
					<div className={`expand-section ${(this.isActive()) ? "active" : ""}`} onClick={this.handleExpandToggle.bind(this)}>
						<ExpandSVG />
					</div>
				</div>
				{(this.isActive()) ? <RateHistory rate={rate} width={this.refs.rate.clientWidth} /> : ""}
			</div>
		)
	}
}

Rate.propTypes = {
	base: PropTypes.string.isRequired,
	rate: PropTypes.array
}

export default connect(null, mapDispatchToProps)(Rate);
