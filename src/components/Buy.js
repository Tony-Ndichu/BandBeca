import React , {Component} from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';


class Buy extends Component{

	constructor(props){
		super(props);

		this.state = {
			on : true
		}
	}

	render(){
		return(
			<h1> THIS IS THE BUY PAGE </h1>	
			);
			
	}
} 
 export default Buy;