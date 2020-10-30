import React from "react"
import "./Post.sass"

const Post = (props) => {
	return (
		<div className="post">
			<div className="item">
				<img src="https://ya-webdesign.com/transparent250_/android-contacts-icon-png-13.png" alt="img"/>
				<p>{props.text}</p>
			</div>
			<div className="likes">Likes: {props.likeCount}</div>
		</div>
	)
}

export default Post
