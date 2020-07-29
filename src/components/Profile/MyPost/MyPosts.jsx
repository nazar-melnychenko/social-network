import React from "react";
import "./MyPosts.sass";
import Post from "./Post/Post";

const MyPosts = (props) => {

	const newPostElement = React.createRef();

	const onUpdateText = () => {
		props.handleUpdateText(newPostElement.current.value);
	};

	const onAddPost = () => {
		props.handleAddPost();
	};


	return (
		<>
			<textarea
				ref={newPostElement}
				onChange={onUpdateText}
				value={props.newPostTemp}
			/><br/>
			<button onClick={onAddPost}>Add post</button>
			{props.posts.map((item, i)=>
				<Post key={i} text={item.post} likeCount={item.likeCount}/>
			)}
		</>
	);
};

export default MyPosts;