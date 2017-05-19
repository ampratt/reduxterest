import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'


class Photo extends Component {
	render() {
		const { post, i, comments } = this.props
		return (
			  <section className="card card-outline-secondary mb-6 lg-3" id={post.code}>
				<Link to={`/view/${post.code}`}>
					<img src={post.display_src}
						 alt={post.caption}
						 className="card-img-top img-fluid" />
				</Link>

				<CSSTransitionGroup transitionName="like"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					<span key={post.likes}
						  className="likes-heart">
						{post.likes}
					</span>
				</CSSTransitionGroup>

			    <div className="card-block">
    			    {(this.props.grid) 
				    	? <p className="card-text">{post.caption}</p> 
				    	: <h4 className="card-subtitle button-group">{post.caption}</h4>}

					  <div className="row">
					    <div className="col">
							<div className="d-flex justify-content-around">
								<button className="item likes"
										onClick={this.props.incrementLikes.bind(null, i)}>
									&hearts; {post.likes}
								</button>
								<Link to={`/view/${post.code}`}
									  className="item button">
									<span className="comment-count">
										<span className="speech-bubble"></span>
										&nbsp;{comments[post.code] ? 
											comments[post.code].length : 0}
									</span>
								</Link>
							</div>
						</div>
					</div>
			    </div>
			    
			  </section>
		)		
	}
}

export default Photo;



					//   <div className="row">
					//     <section className="col-12">
	    // 					<div className="text-center btn-toolbar btn-offset-2">

			  // 				    <button className="btn btn-lg btn-outline-info" 
			  // 				    		style={buttonWidth}
			  // 				    		onClick={this.props.incrementLikes.bind(null, i)}>
				 //  				    &hearts; {post.likes}
			  // 				    </button>

					// 			<button className="btn btn-lg btn-outline-info" 
			  // 				    		style={buttonWidth}>
					// 			<Link to={`/view/${post.code}`}>
					// 				<span>
					// 					<span className="speech-bubble"></span>
					// 					&nbsp;{comments[post.code] ? 
					// 						comments[post.code].length : 0}
					// 				</span>
					// 			</Link>
					// 			</button>
					// 		</div>
					// 	</section>
					// </div>



			// <figure className="grid-figure">
			// 		<div className="grid-photo-wrap">
			// 			<Link to={`/view/${post.code}`}>
			// 				<img src={post.display_src}
			// 					 alt={post.caption}
			// 					 className="grid-photo" />
			// 			</Link>

			// 			<CSSTransitionGroup transitionName="like"
			// 				transitionEnterTimeout={500}
			// 				transitionLeaveTimeout={500}>
			// 				<span key={post.likes}
			// 					  className="likes-heart">
			// 					{post.likes}
			// 				</span>
			// 			</CSSTransitionGroup>

			// 		</div>

			// 		<figcaption>
			// 			<p>{post.caption}</p>
			// 			<div className="control-buttons">
			// 				<button className="likes"
			// 						onClick={this.props.incrementLikes.bind(null, i)}>
			// 					&hearts; {post.likes}
			// 				</button>
			// 				<Link to={`/view/${post.code}`}
			// 					  className="button">
			// 					<span className="comment-count">
			// 						<span className="speech-bubble"></span>
			// 						&nbsp;{comments[post.code] ? 
			// 							comments[post.code].length : 0}
			// 					</span>
			// 				</Link>
			// 			</div>
			// 		</figcaption>
			// 	</figure>