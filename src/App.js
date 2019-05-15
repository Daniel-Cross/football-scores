import React, { Component } from 'react';
import './App.css';
import getTable from './services/getTable';
import getLatestNewsData from './components/fetchRequest'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: '',
			news: []
		};
	}

	handleSearch = () => {
		getTable().then((data) => {
			this.setState({
				results: data,
			});
		});
	};

	 componentDidMount= () => {
		getLatestNewsData().then(data => {
			console.log(data, 'data once promise is resolved!');
			this.setState({news: data});
		})
};



	render() {

		return (
			<div id="App">
				{this.state.news.map(header => (
					<div key={header.NewsDetail.stringValue}>
					<h3 >{header.NewsDetail.stringValue}</h3>
					<p >{header.NewsHeading.stringValue}</p>
					<a href={header.GroupBlogURL.stringValue}>
					<button>More</button>
					</a>
					</div>
				))}

			</div>
		);
	}
}

export default App;
