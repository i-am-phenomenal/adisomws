import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    ListGroup,
    ListGroupItem,
    Col,
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

    renderCarousel = () => {
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

    renderSideMenu = () => {
      return(
        <div> 
             <p />
            {/* <h3> {this.renderSideMenuTitle()}</h3> */}
            <ListGroup>
                <ListGroupItem id="genesis"   tag="button" action>Overview</ListGroupItem>
                <ListGroupItem id="vision"  tag="button" action>Disaster Response</ListGroupItem>
                <ListGroupItem id="mission"  tag="button" action>Health </ListGroupItem>
                <ListGroupItem id="people"  tag="button" action>People Behind ADISOM </ListGroupItem>
                <ListGroupItem id="approach"  tag="button" action>Approach</ListGroupItem>
            </ListGroup>
          </div> 
      )
    }

    render () {
        return(
          <div> 
            <br /> 
            <br /> 
            <br /> 
              <Container> 
                    <Row> 
                        <Col xs="3"> {this.renderSideMenu()} </Col> 
                        <Col xs="9"> {this.renderCarousel()} </Col> 
                    </Row>                       
                </Container>
          </div> 
        )
    }
}
