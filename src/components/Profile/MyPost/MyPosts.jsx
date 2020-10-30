import React from "react"
import "./MyPosts.sass"
import Post from "./Post/Post"
import { Field, reduxForm } from "redux-form"
import { maxLength, required } from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormsControls/FormsControls"

const maxLength10 = maxLength(10)

let PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea}
			       name="massage"
			       placeholder="Massage..."
			       validate={[required, maxLength10]}
			/>
			<br/>
			<button>Add post</button>
		</form>
	)
}

PostForm = reduxForm({ form: 'post' })(PostForm)

const MyPosts = ({ addPost, isOwner, posts }) => {

	const addNewPost = (formData) => {
		addPost(formData.massage)
		formData.massage = ''
	}

	return (
		<>
			{isOwner && <PostForm onSubmit={addNewPost}/>}
			{[...posts].reverse().map((item, i) =>
				<Post key={i} text={item.post} likeCount={item.likeCount}/>
			)}
		</>
	)
}

export default MyPosts
