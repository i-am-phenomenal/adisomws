import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel 
}
from "reactstrap";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

export default class CarouselView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageNames: [
                "w_1", 
                "w_2", 
                "w_3", 
                "w_4", 
                "w_5", 
                "w_6", 
                "w_7", 
                "w_8", 
                "w_9",
                "w_10", 
                "w_11", 
                "w_12", 
                "w_13", 
                "w_14", 
                "w_15", 
                "w_16", 
                "w_17"
            ],  
        }
    }

    generateImagePath = (name) => {
        let path = "/assets/images/Adisom/" + name + ".png";
        console.log(path, "  @@@@@@@")
        return path  //WIP 
    }

    renderImages = () => {
        return(
            <div>   
                {this.state.imageNames.map(item => 
                    <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={this.generateImagePath(item)}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>        
                )}
                
                {/* <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem> */}
            </div> 
        )
    }

    renderCarousel = () => {
        return(
            <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
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

    render () {
        return(
            <div> 
                {this.renderCarousel()}
                </div> 
        )
    }
}
