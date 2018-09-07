import React , {Component} from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import Bar from './Bar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activetoggle , menuon , menuoff } from '../modules/brain';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import '../App.css';



class App extends Component{

	constructor(props){
		super(props);

	
	    this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		this.props.menuoff();
	}


	handleClick(){

		this.props.menuon();
	    this.props.activetoggle();
  }


	render(){
		return(
			<HashRouter>
				<div className="outer">

				<Bar />

				  <div className={ this.props.active ? "menu show" : "menu hide" } onClick={ this.handleClick } >
				  	<img src={this.props.imgr.pic1}  alt="menu" />
				  </div>

				  <div className={ this.props.active ? "close hide" : "close show" } onClick={ this.handleClick } >
				  	&#xd7;
				  </div>

  

      <div className={ this.props.active ? "menubody not-visible" : "menubody visible" } id={this.props.hidden ? "hidden" : null } >
        <ul>
          <li className={ this.props.active ? "menu-item-fade-out1" : "menu-item-fade-in1" } onClick={ this.handleClick } ><NavLink activeClassName="active" to="/home#home"   smooth={true} duration={500}  >Home</NavLink></li>
          <li className={ this.props.active ? "menu-item-fade-out3" : "menu-item-fade-in3" } onClick={ this.handleClick } ><NavLink activeClassName="active" to="/home#gallery"   smooth={true} duration={500}  >Photos</NavLink></li>
          <li className={ this.props.active ? "menu-item-fade-out2" : "menu-item-fade-in2" } onClick={ this.handleClick } ><NavLink activeClassName="active" to="/home#music"   smooth={true} duration={500}  >Music</NavLink></li>
          <li className={ this.props.active ? "menu-item-fade-out3" : "menu-item-fade-in3" } onClick={ this.handleClick } ><NavLink activeClassName="active" to="/home#video"   smooth={true} duration={500}  >Video</NavLink></li>

        </ul>

      </div>

				<div className="thebody">
					<Route exact path="/" component={Home}/>
					<Route path="/home" component={Home}/>

				</div>

				</div>
			</HashRouter>
			);
	}
} 

const mapStateToProps = state => ({
	active: state.brain.active,
	imgr: state.brain.imgr,
	hidden: state.brain.hidden
})

const mapDispatchToProps = dispatch => bindActionCreators({
	activetoggle,
	menuon,
	menuoff	
}, 
		dispatch)


 export default connect(mapStateToProps , mapDispatchToProps) (App);