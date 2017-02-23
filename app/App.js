import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import "babel-polyfill";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import Main from "./pages/Main";
import Store from "./Store";

const App = () => (
	<Provider store={Store}>
		<Router>
			<Main />
		</Router>
	</Provider>
)

render(<App />, document.querySelector('#root'));
