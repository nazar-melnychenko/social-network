// import React from "react";
import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostTemp: state.profilePage.newPostTemp
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleUpdateText: (text) => {
			dispatch(updatePostActionCreator(text));
		},
		handleAddPost: () => {
			dispatch(addPostActionCreator());
		}
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;