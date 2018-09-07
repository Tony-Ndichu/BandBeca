import React , {Component} from 'react';


class Buy extends Component{

	constructor(props){
		super(props);

		this.state = {
			on : true
		}
	}

	render(){
		return(
			<div>
				<div id="Home" className="homediv"> </div>
					<div id="About" className="aboutdiv"> </div>
					<div id="Portfolio" className="portfoliodiv"></div>
			</div>
			);
	}
} 
 export default Buy;