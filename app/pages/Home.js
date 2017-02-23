import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="home-wrapper">
					<video autoPlay loop>
						<source src="/assets/cash.mp4" type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
					<h2>Welcome to my FX Exchange Rate Calculator</h2>
					<p>Explore app via sidebar &larr;</p>
				</div>
			</div>
		)
	}
}
