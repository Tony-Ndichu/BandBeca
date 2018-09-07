import React , {Component} from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {connect} from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';


const photos = [
  { src: '../images/pic (2).jpeg', width: 4, height: 4 },
  { src: '../images/pic (3).jpeg', width: 1, height: 1 },
  { src: '../images/pic (4).jpeg', width: 3, height: 3 },
  { src: '../images/pic (11).jpeg', width: 4, height: 4 },
  { src: '../images/pic (9).jpeg', width: 7, height: 5 },
  { src: '../images/pic (5).jpeg', width: 4, height: 4 },
  { src: '../images/pic (8).jpeg', width: 3, height: 3 },
  { src: '../images/pic (7).jpeg', width: 4, height: 3 },
  { src: '../images/pic (10).jpeg', width: 4, height: 3 },

];


class HomePart2 extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
    	<ScrollAnimation animateIn="fadeInUp" duration={1}>
      <div className="part2">

      	<div className="holdbox">


    	<ScrollAnimation animateIn="fadeInDown" duration={1}>
      		<p className="heads">LIVE LOVE MUSIC</p>
      	</ScrollAnimation>

      	<ScrollAnimation animateIn="fadeInDown" duration={1}>
        <Gallery photos={photos} onClick={this.openLightbox} />
        </ScrollAnimation>
        
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        </div>
      </div>
      </ScrollAnimation>
    )
  }
}

const mapStateToProps = state => ({
	active: state.brain.active,
	imgr: state.brain.imgr
})

export default connect(mapStateToProps, null ) (HomePart2);