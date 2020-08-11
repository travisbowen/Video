import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

// Key not in youtube.js due to bug with axios not merging correctly
let API_KEY = "AIzaSyCqzB5x8CXCWPFvA9P3eC0-ZkRyh8C2rvY";

class App extends React.Component {
	// Callback function passed down to search bar component for receiving search term
	onSearchTermSubmit = (term) => {
		youtube
			.get("/search", {
				params: {
					q: term,
					part: "snippet",
					type: "video",
					maxResults: 5,
					key: API_KEY,
				},
			})
			.then((res) => {
				console.log(res);
			});
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onSearchTermSubmit} />
			</div>
		);
	}
}

export default App;
