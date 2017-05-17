/* reducer takes in:
	1. action (info about what happened)
	2. copy of the current state

	i.e. {action, store} -> ok, let me check -> return (updated store)
*/
import C from '../constants'


// functional p - pure functions -> DON"T mutate state
export const posts = (state=[], action) => {
	switch(action.type) {

		case C.INCREMENT_LIKES :
			console.log('INCREMENTING Likes...')
			const i = action.payload
			return [
			     ...state.slice(0,i),						// just BEFORE one to update
			     {...state[i], likes: state[i].likes + 1},	// the ONE to incrememnt
			     ...state.slice(i + 1)						// verything AFTER one to update
 			]

		default: 
			return state
	}
}
