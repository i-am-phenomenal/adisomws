import React, {Component}  from 'react';
import ReactPlayer from 'react-player';

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoUrl: this.props.videoUrl
        };
    }

    render () {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                // className='react-player fixed-bottom'
                url = {this.state.videoUrl} 
                width='15%'
                height='30%'
                controls = {true}
                  playsInline
                  // playing
                />
              </div> 
        )
    }
}
