import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
	const lists = props.videos.map((video) => {
		return (
			<div className='ui relaxed divided list'>
				<VideoItem onVideoSelected={props.onVideoSelected} video={video} />
			</div>
		);
	});
	return <div>{lists}</div>;
};

export default VideoList;
