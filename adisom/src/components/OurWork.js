import React, {Component} from 'react';
import { 
    Jumbotron, 
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Card,
    CardBody,
    Col,
    ListGroup,
    ListGroupItem,
    CardImg,
    CardText,
    CardTitle,
    CardSubtitle
}
from 'reactstrap';
import CarouselView from './CarouselView';
export default class OurWorkView extends Component {
        constructor(props) {
            super(props);
            this.state = {}
        }

        render() {
            return(
                <div> 
                    <CarouselView />
                </div> 
            )
        }
}