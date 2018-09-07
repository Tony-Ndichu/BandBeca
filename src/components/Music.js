import React , {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from 'react-redux';
import Lightbox from 'lightbox-react';
import {bindActionCreators} from 'redux';
import { showlyrics } from '../modules/brain';


class Music extends Component{

	constructor(props){
		super(props);

		this.state = {
			text : null
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(digit){
		this.props.showlyrics();

		if (digit == 6){
				this.setState({
		          text : this.props.texts.rideordie
		       });

		}if (digit == 2){
				this.setState({
		          text : "Nomare bro"
		       });
		}
	}

	pass

	render(){
		return(
		<ScrollAnimation animateIn="fadeInUp" offset={50} duration={1}>
			<div className="blue" id="music">
			    <ScrollAnimation animateIn="fadeInDown" duration={1}>
				<p className="heads">MUSIC</p>
				</ScrollAnimation>

				<div className="big-album-art">
				<ScrollAnimation animateIn="fadeInDown" delay={500} duration={1}>
					<img src={this.props.imgr.pic7} alt="album cover"/>
				</ScrollAnimation> 
				</div>

				<div className="songlist">
					<ul>
					 <ScrollAnimation animateIn="fadeInDown" delay={500} duration={1}>
						<li className="pointed" data-id={1} onClick={ () =>this.handleClick(1) } > Brathe </li>
						<li className="pointed" data-id={2} onClick={ () =>this.handleClick(2) } > Tonight </li>
						<li className="pointed" data-id={3} onClick={ () =>this.handleClick(3) } > 1234 </li>
						<li className="pointed" data-id={4} onClick={ () =>this.handleClick(4) } > Maua </li>
						<li className="pointed" data-id={5} onClick={ () =>this.handleClick(5) } > Toka </li>
						<li className="pointed" data-id={6} onClick={ () =>this.handleClick(6) } > Ride or Die </li>
					</ScrollAnimation>
					</ul>
				</div>
			</div>

			<div className={ this.props.lyrics ? "lyric-box" : "lyric-box not-visible" } >
				<div className="pointed close-lyrics right" onClick={ ()=>this.props.showlyrics() } >&#xd7;</div>
				<div className="lyric-body">{ this.state.text }</div>
			</div>

			</ScrollAnimation>
			)
	}

}

const mapStateToProps = state => ({
	imgr : state.brain.imgr,
	lyrics : state.brain.lyrics,
	texts : state.brain.texts
})

const mapDispatchToProps = dispatch => bindActionCreators({
	showlyrics
}, 
		dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Music);