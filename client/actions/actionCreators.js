import C from '../store/constants'
import fetch from 'isomorphic-fetch'

// increment like
export const incrementLikes = function(index) {
	return {
		type: C.INCREMENT_LIKES,
		payload: index
		// index
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: C.ADD_COMMENT,
		postId, 
		author, 
		comment
    	// payload: {postId, author, comment}
    }
}

// remove comment
export const removeComment = (postId, i) =>
({
	type: C.REMOVE_COMMENT,
	postId, 
	i
})