import React, { Component } from 'react'
import { Link } from 'react-router'
import Photo from './Photo'

class PhotoGrid extends Component {
	render() {
		return (
			<div className="photo-grid">
				{this.props.posts.map( (post, i) => 
					<Photo key={i}
							i={i}
							post={post}
							{...this.props}
					/>
				)}
			</div>
		)		
	}
}

export default PhotoGrid;


// import React from 'react'
// import { Link } from 'react-router'

// const PhotoGrid = () => {
// 	return (
// 		<div className="photo-grid">
// 			{JSON.stringify(this.props.posts, null, ' ')}
// 		</div>
// 	)
// }

// export default PhotoGrid;