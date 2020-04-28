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

import { 
    MDBCarousel, 
    MDBCarouselInner, 
    MDBCarouselItem, 
    MDBView, 
    MDBContainer 
  } from "mdbreact";
import ImageList from './ImageList';

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
            ]
        }
    }

    render () {
        return(
            <div> 
            <br /> 
            <br /> 
            <br /> 
            <ImageList images={this.state.images} />
          </div> 
        )
    }
}