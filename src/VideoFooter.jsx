import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from './icons/MusicNote'

function VideoFooter({ channel, description, song }) {
	return (
		<div className="footer-left">
			<div className="text">
				<h3>@{channel}</h3>
				<p>{description}</p>
				<div className="ticker">
					<MusicNoteIcon style={{ width: '30px' }} />
					<marquee direction="left" scrollamount="2">
						{song}
					</marquee>
				</div>
			</div>
		</div>
	)
}

export default VideoFooter;