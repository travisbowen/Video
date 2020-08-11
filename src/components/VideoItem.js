import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
	console.log(props.video);
	return (
		<div className='video-item item'>
			<img
				className='ui image'
				src={props.video.snippet.thumbnails.medium.url}
			/>
			<div className='content'>
				<div className='header'>{props.video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
