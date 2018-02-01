import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	render() {
		return (
			<div className="app">
				<h1 className="title">Boilerplate Node/React App</h1>
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
