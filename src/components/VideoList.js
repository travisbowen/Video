import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
	const lists = props.videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelected={props.onVideoSelected}
				video={video}
			/>
		);
	});
	return <div className='ui relaxed divided list'>{lists}</div>;
};

export default VideoList;
