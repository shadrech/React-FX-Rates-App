import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src="/assets/header.jpg" alt="FX Exchange Calculator Header"/>
			</div>
		)
	}
}

export default Header;