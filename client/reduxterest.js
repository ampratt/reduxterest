import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory  } from 'react-router'
import Raven from 'raven-js'
import { sentry_url, logException } from './data/config'

// redux store
import { Provider } from 'react-redux'
import store, { reduxHistory } from  './store/store'

import css from './css/style.styl'
import Routes from './routes'

// Raven.config(sentry_url).install()
// Raven.config(sentry_url, {
// 	tags: {
// 		git_commit: 'asdsdhldfg',
// 		userLevel: 'editor'
// 	}
// }).install()

// console.log(window.user.doesNotExists)

// logException(new Error('a faked error'), {
// 	email: 'stupid@stupid.does'
// }) 

// Raven.showReportDialog()

render(
	<Provider store={store}>
		<Router history={reduxHistory}
				routes={Routes}
		/>
	</Provider>,
	document.getElementById('root')
)

// environment={Relay.Store}
// render={applyRouterMiddleware(useRelay)}