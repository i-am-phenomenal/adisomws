import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    ListGroup,
    Card,
    CardBody,
    ListGroupItem,
    Col,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel 
}
from "reactstrap";

import VideoPlayer from './VideoPlayer';

import { 
    MDBCarousel, 
    MDBCarouselInner, 
    MDBCarouselItem, 
    MDBView, 
    MDBContainer 
  } from "mdbreact";

export default class GalleryView extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    original: "/assets/images/Adisom/w_1.jpg",
                    thumbnail: "/assets/images/Adisom/w_1.jpg"
                },
                {
                    original: "/assets/images/Adisom/w_2.jpg",
                    thumbnail: "/assets/images/Adisom/w_2.jpg"
                },
                {
                    original: "/assets/images/Adisom/w_3.jpg",
                    thumbnail: "/assets/images/Adisom/w_3.jpg"
                }              
            ],
          videosUrls: [
            'Adisom_video_1.mp4'
          ]
        }
    }

    renderImages = () => {
        return(
            <div>   
                    <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_1.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>        
                
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_2.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_3.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId="4">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_4.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId="5">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_5.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId="6">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_6.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId="7">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_7.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>

                  <MDBCarouselItem itemId="8">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src = "/assets/images/Adisom/w_8.jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
            </div> 
        )
    }

    renderImageCarousel = () => {
        return(
            <MDBContainer style={{height: "30%", width: "60%"}}>
            <MDBCarousel
              activeItem={1}
              length={8}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                  {this.renderImages()}
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        );
    }

    renderVideos = () => {
        return(
          <div>
                {this.state.videosUrls.map(item => 
                    <VideoPlayer  
                      videoUrl = {'/videos/' + item}
                      />
                  )}
          </div> 
        ) 
    }

    renderVideoCarousel = () => {

      return(
        <div> 
           <MDBContainer style={{height: "30%", width: "60%"}}>
           <MDBCarousel
              activeItem={1}
              length={8}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
                <MDBCarouselInner> 
                    {this.renderVideos()}
                    </MDBCarouselInner>
              </MDBCarousel>
           </MDBContainer>
          </div>
      )
        // return(
        //   <VideoPlayer 
        //     videoUrl = {path}
        //     />           
        // )
    }

    render () {
        return(
            <div> 
            <br /> 
            <br /> 
            <br /> 
              {this.renderImageCarousel()}    
              Images would be changed in the future

              {this.renderVideoCarousel()}
          </div> 
        )
    }
}