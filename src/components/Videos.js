import React , {Component} from 'react';
import YouTube from 'react-youtube';
import InstagramEmbed from 'react-instagram-embed'
import Instafeed from 'react-instafeed';
import ScrollAnimation from 'react-animate-on-scroll';

 
class Videos extends Component{
  render() {
    const opts = {
      height: '500',
      width: '700',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const opts2 = {
      height: '150',
      width: '300',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };


    return (
  <ScrollAnimation animateIn="fadeInUp" offset={50} duration={1}>
      <div className="red" id="video">
          <ScrollAnimation animateIn="fadeInDown" duration={1}>
        <p className="heads">VIDEO</p>
        </ScrollAnimation>

        <div className="left-tube">
      <YouTube
        videoId="5Z7Vu60UC8c"
        opts={opts}
        onReady={this._onReady}
      />
      </div>

      <div className="right-tube">

          <div className="right-tube-item">
            <YouTube
        videoId="2i9aqPp4kHI"
        opts={opts2}
        onReady={this._onReady}
      />
      </div>

          <div className="right-tube-item">
                  <YouTube
        videoId="LYbxq63bD68"
        opts={opts2}
        onReady={this._onReady}
      />
      </div>

      <div className="right-tube-item">
                  <YouTube
        videoId="QNxSXpScyEg"
        opts={opts2}
        onReady={this._onReady}
      />
      </div>
      </div>

      </div>
      </ScrollAnimation>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Videos;