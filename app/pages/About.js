import React from "react";

export default class Home extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="about-page">
					<h2>Exchange Rates App</h2>
					<h3>Summary</h3>
					<p>Web app lets the user enter a date and a base currency and, when submitted, fetches a list of foreign exchange rates from the fixer.io API as of that date</p>
					<p>Making it three pages just as an excuse to try out the newly released react-router</p>
				</div>
			</div>
		)
	}
}
