import React , {Component} from 'react';
import {posters} from './posters';

class Bar extends Component{

	constructor(props){
		super(props);

		this.state = {
			post : posters
		}
	}

	render(){
		return(
			<div className="bar">

					<div className="logobox">
						<img src={this.state.post.pic3} alt="logo" />
					</div>

			</div>
			);
	}
} 
 export default Bar;