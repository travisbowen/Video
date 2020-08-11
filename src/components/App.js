import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

// Key not in youtube.js due to bug with axios not merging correctly
let API_KEY = "AIzaSyCqzB5x8CXCWPFvA9P3eC0-ZkRyh8C2rvY";

class App extends React.Component {
	state = { videos: [] };

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
				this.setState({ videos: res.data.items });
			});
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onSearchTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
