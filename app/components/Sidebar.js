import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Sidebar extends Component {
	render() {
		const { pathname } = this.props.location;

		return (
			<div id="sidebar">
				<ul>
					<li className={(pathname == "/") ? "active" : ""}>
						<Link to="/">HOME</Link>
					</li>
					<li className={(pathname == "/about") ? "active" : ""}>
						<Link to="/about">ABOUT</Link>
					</li>
					<li className={(pathname == "/rates") ? "active" : ""}>
						<Link to="/rates">RATES</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default withRouter(Sidebar);
