import React, { Component } from 'react'
import { Link } from 'react-router'

class Main extends Component {
	render() {
		return (
			<div className="container">
			  	<div class="row">
			      <div class="col">
					<h1>
						<Link to="/">Reduxterest</Link>
					</h1>
			      </div>
		  		</div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default Main;


			// <SinglePost ...this.props />