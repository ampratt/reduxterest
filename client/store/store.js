import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/rootReducer'

// data
import comments from '../data/comments'
import posts from '../data/posts2'
// import posts from '../data/fakePosts'

// object for default data
const defaultState = {
	posts,
	comments
}

// const enhancers = compoe(
// 	window.devToolsExtension ? window.devToolsExtension() : f => f
// )
// const store = createStore(rootReducer, defaultState, enhancers)

const store = createStore(rootReducer, defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

export const reduxHistory = syncHistoryWithStore(browserHistory, store)

// // hot-reloading reducers
// if(module.hot) {
// 	module.hot.accept('./reducers/', () => {
// 		const nextRootReducer = require('./reducers/rootReducer').default;
// 		store.replaceReducer(nextRootReducer);	
// 	});
// }

export default store;

