import React , {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from 'react-redux';
import Lightbox from 'lightbox-react';
import {bindActionCreators} from 'redux';
import { showlyrics } from '../modules/brain';


class Music extends Component{

	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.showlyrics();
	}



	render(){
		return(
		<ScrollAnimation animateIn="fadeInUp" offset={50} duration={1}>
			<div className="blue">
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
						<li className={ this.props.lyrics ? "showlyrics"  : null } onClick={ this.handleClick }>Brathe</li>
						<li className={ this.props.lyrics ? "showlyrics"  : null } onClick={ this.handleClick }>Tonight</li>
						<li className={ this.props.lyrics ? "showlyrics"  : null } onClick={ this.handleClick }>1234</li>
						<li className={ this.props.lyrics ? "showlyrics"  : null } onClick={ this.handleClick }>Maua</li>
						<li className={ this.props.lyrics ? "showlyrics"  : null } onClick={ this.handleClick }>Toka</li>
						<li className={ this.props.lyrics ? "showlyrics"  : null } onClick={ this.handleClick }>Ride or Die</li>
					</ScrollAnimation>

					</ul>
					<div className="lyric-box">

					</div>
				</div>

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