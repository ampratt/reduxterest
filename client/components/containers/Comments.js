import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComment, removeComment } from '../../actions/actionCreators'
import Comments from '../Comments'


const mapStateToProps = (state) => 
({
    posts: state.posts,
    comments: state.comments
})

const mapDispatchToProps = dispatch =>
({
	addComment({postId, author, comment}) {
		dispatch(
			addComment(postId, author, comment)
		)
	},
	removeComment({postId, i}){
		dispatch(
			removeComment(postId, i)
		)
	}
})

// inject state and actions to UI component
const App = connect(mapStateToProps, mapDispatchToProps)(Comments)

export default App
