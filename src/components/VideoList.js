import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
	const lists = props.videos.map((video) => {
		return <VideoItem />;
	});
	return <div>{lists}</div>;
};

export default VideoList;
