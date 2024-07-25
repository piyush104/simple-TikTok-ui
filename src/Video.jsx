import React, { useRef } from 'react'
import VideoSidebar from './VideoSidebar'
import VideoFooter from './VideoFooter'
import './Video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)

	const onVideoPress = () => {
		// write toggle logic here
		if(videoRef.current.paused){
			videoRef.current.play();
		}
		else{
			videoRef.current.pause();
		}
	}

	return (
		<div className="video">
			<video
				className="player"
				onClick={onVideoPress}
				muted
				ref={videoRef}
				loop
				src={url}
			></video>
			<div className="bottom-controls">
				<VideoFooter channel={channel} description={description} song={song} />
				<VideoSidebar likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
