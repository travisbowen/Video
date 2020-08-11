import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// Key not in youtube.js due to bug with axios not merging correctly
let API_KEY = "AIzaSyCqzB5x8CXCWPFvA9P3eC0-ZkRyh8C2rvY";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onSearchTermSubmit("dogs");
	}

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
				this.setState({
					videos: res.data.items,
					selectedVideo: res.data.items[0],
				});
			});
	};

	onVideoSelected = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onSearchTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								onVideoSelected={this.onVideoSelected}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
