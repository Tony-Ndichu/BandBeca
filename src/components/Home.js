import React , {Component} from 'react';
import { posters } from './posters';
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changetop} from '../modules/brain';
import Photos from './Photos';
import Videos from './Videos';
import Music from './Music';

class Home extends Component {

	constructor(props){
		super(props);

		
	}

	componentDidMount(){
		document.addEventListener('scroll' , ()=>{
			const isTop = window.scrollY < 1;

				if (isTop !== this.props.isTop){
			
				this.props.changetop();


			}
		})
	}

	render(){
		return(
			<div className="home-container" id="home">
				
			<div className="bigbrand">
				<div className={ this.props.isTop ? "brandname" : "brandname up" } >THE</div>
				<div className={ this.props.isTop ? "brandname" : "brandname down" }>BAND</div>
				<div className={ this.props.isTop ? "brandname" : "brandname up" }>BECA</div>
			</div>

			<Music />
			
			<Photos />

			<Videos />



			</div>
			);
	}
} 

const mapStateToProps = state => ({
	isTop : state.brain.isTop
})

const mapDispatchToProps = dispatch => bindActionCreators({
	changetop
} , 
		dispatch)


 export default connect(mapStateToProps , mapDispatchToProps ) (Home);