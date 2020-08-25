import profileReducer, {addPost} from "./profileReducer"
import React from "react"

let init = {
	posts: [
		{id: 1, post: 'Post 1', likeCount: 3},
		{id: 2, post: 'Post 2', likeCount: 5},
		{id: 3, post: 'Post 3', likeCount: 7},
	],
	profile: null,
	status: ''
}

test('new post should be added', () => {
	let action = addPost('it-kamasutra.com')
	let newState = profileReducer(init, action)

	expect(newState.posts.length).toBe(4)

})



