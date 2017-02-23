import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ExchangeRates from "./ExchangeRates";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="content-container">
					<Sidebar />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/rates" component={ExchangeRates} />
				</div>
			</div>
		)
	}
}