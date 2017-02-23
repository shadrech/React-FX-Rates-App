import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment"

import mapDispatchToProps from "../data/mapDispatchToProps";
import mapStateToProps from "../data/mapStateToProps";

class DatePick extends Component {
	render() {
		return (
			<DatePicker 
				selected={this.props.date}
				onChange={this.props.updateDatePickerAction}
				placeholderText="Select day"
				maxDate={moment()}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePick);
