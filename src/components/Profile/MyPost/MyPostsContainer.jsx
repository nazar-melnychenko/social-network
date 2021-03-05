import { addPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


const mapStateToProps = (state, { isOwner }) => ({
	posts: state.profilePage.posts,
	isOwner,
})

export default connect(mapStateToProps, { addPost })(MyPosts)
