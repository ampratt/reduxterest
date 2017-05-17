import C from '../constants'

// action: addComment = (postId, author, comment)
export const postComments = (state=[], action) => {

	switch(action.type) {

		case C.ADD_COMMENT :
			console.log('ADDING Comment...')
			return [
			    ...state,	// existing state
			    {
			    	user: action.author,
			     	text: action.comment
			 	}
 			]

		case C.REMOVE_COMMENT :
			console.log('REMOVING Comment...')
			return [
				...state.slice(0, action.i), // BEFORE one to delet
				...state.slice(action.i + 1) // AFTER one to delet
			]

		default: 
			return state
	}
}

export const comments = (state=[], action) => {

	if(typeof action.postId !== 'undefined') {
		return {
			...state,	//current state
			//overwite current post with new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	// console.log('postID was undefined')

	return state
}

	// (action.type === C.SET_GOAL) ? 
	// 	 parseInt(action.payload) :
	// 	 state
