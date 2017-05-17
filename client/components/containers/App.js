import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/actionCreators'
import Main from '../Main'


const mapStateToProps = (state) => 
({
    posts: state.posts,
    comments: state.comments
})

const mapDispatchToProps = disptach => 
(
	bindActionCreators(actionCreators, disptach)
)

// inject state and actions to UI component
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
