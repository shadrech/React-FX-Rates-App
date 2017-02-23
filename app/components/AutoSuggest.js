import React from "react";
import Autosuggest from "react-autosuggest";
import { connect } from 'react-redux';

import mapDispatchToProps from "../data/mapDispatchToProps";
import mapStateToProps from "../data/mapStateToProps";

class AutoSuggest extends React.Component {
	onChange(e, { newValue }) {
		this.props.updateAutosuggestValueAction(newValue);
	}

	onSuggestionsFetchRequest({ value }) {
		this.props.updateAutosuggestAction(value);
	}

	render() {
		const { autosuggest } = this.props;
    	const inputProps = {
    		placeholder: "Select base currency",
    		value: autosuggest.value,
    		onChange: this.onChange.bind(this)
    	};

		return (
			<Autosuggest 
				suggestions={autosuggest.suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequest.bind(this)}
				onSuggestionsClearRequested={this.props.clearAutosuggestAction}
				getSuggestionValue={(suggestion) => suggestion.code}
				renderSuggestion={(suggestion) => <span>({suggestion.code}) {suggestion.name}</span>}
				shouldRenderSuggestions={() => true}
				inputProps={inputProps}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggest);
