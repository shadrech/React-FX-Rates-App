import React, { Component, PropTypes } from "react"
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

class RateHistory extends Component {
	renderChart() {
		const history = this.props.rate[2].rates;

		return (
			<AreaChart width={this.props.width} height={300} data={history} margin={{top: 5, right: 30, bottom: 5}}>
				<defs>
					<linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
				      <stop offset="5%" stopColor="#78bda4" stopOpacity={0.8}/>
				      <stop offset="95%" stopColor="#78bda4" stopOpacity={0}/>
				    </linearGradient>
				</defs>
       			<XAxis dataKey="date"/>
       			<YAxis/>
       			<CartesianGrid strokeDasharray="3 3"/>
       			<Tooltip/>
       			<Area type="monotone" dataKey="rate" stroke="#6bbb94" fillOpacity={1} fill="url(#chartColor)" dot={{r:4, fill:"#6bbb94"}} activeDot={{r: 8}} />
	    	</AreaChart>
		)
	}

	render() {
		const { rate } = this.props;
		return (
			<div className="history">
				<hr/>
				<h4>Rates from last 12 months</h4>
				{(rate[2].error === "") ? "" : <div className="error-mssg">{rate[2].error}</div>}
				{(rate[2].fetching) ? <img src="/assets/loader2.gif" alt="loading" className="loader2" /> : this.renderChart()}
			</div>
		)
	}
}

RateHistory.propTypes = {
	rate: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired
}

export default RateHistory;
