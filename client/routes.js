import React from 'react'
import { Route, IndexRoute, browserHistory  } from 'react-router'

import App from './components/containers/App'
import PhotoGrid from './components/PhotoGrid'
import SinglePost from './components/SinglePost'

const createRoutes = () => {
  return (
		<Route path="/" 
			   component={App}>
			<IndexRoute component={PhotoGrid} />
			<Route path="/view/:postId" 
				   component={SinglePost} />
		</Route>
  )
}

const Routes = createRoutes()

export default Routes

// const routes = (
// 	<Router history={browserHistory} >
// 		<Route path="/" component={App}>
// 			<IndexRoute component={PhotoGrid}></IndexRoute>
// 			<Route path="/view/:postId" component={SinglePost}></Route>
// 		</Route>
// 	</Router>
// )