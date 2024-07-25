import { useState } from 'react'
import FavoriteIcon from './icons/FavoriteIcon'
import FavoriteBorderIcon from './icons/FavoriteIconBordered'
import MessageIcon from './icons/Message'
import ShareIcon from './icons/Share'
import './VideoSidebar.css'


function VideoSidebar({ likes, shares, messages }) {
	const [liked, setLiked] = useState(false)

	return (
		<div className="video-sidebar">
			<div className="sidebar-icon">
				{liked ? (
					<FavoriteIcon
						style={{ width: '40px', height: '40px' }}
						onClick={() => setLiked(false)}
					/>
				) : (
					<FavoriteBorderIcon
						style={{ width: '40px', height: '40px' }}
						onClick={() => setLiked(true)}
					/>
				)}
				<p>{liked ? likes + 1 : likes}</p>
			</div>
			<div className="sidebar-icon">
				<MessageIcon style={{ width: '40px', height: '40px' }} />
				<p>{messages}</p>
			</div>
			<div className="sidebar-icon record-below">
				<ShareIcon style={{ width: '40px', height: '40px' }} />
				<p>{shares}</p>
			</div>
			<div className="sidebar-icon record">
				<img src="https://static.thenounproject.com/png/934821-200.png" />
			</div>
		</div>
	)
}

export default VideoSidebar;
