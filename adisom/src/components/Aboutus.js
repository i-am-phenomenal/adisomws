import React, {Component} from 'react';
import { 
    Jumbotron, 
    Button,
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
}
from 'reactstrap';

export default class AboutUsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aims: [
                "To run physically Handicapped Upliftment Mission.",
                "To run Literacy Mission.",
                "To run Women & Child Development Mission.",
                "To run Adult Education Mission.",
                "To run Slum Development Mission.",
                "To run Minority Development Mission.",
                "To run Stop Child Labour Mission."
        ],
        }
    }

    renderAimsAndGoals = () => {
        return(
            <ListGroup> 
                   {this.state.aims.map(item => 
                       <ListGroupItem>
                           {item}
                       </ListGroupItem>
                   )} 
                </ListGroup>             
        )
    }

    renderContentForJumboTron = () => {
            return(
                <div> 
                    <h3 ><b> "Sustainability, social equality and the environment are now business problems. And corporate leaders can't depend on governments to solve them." </b> </h3>
                    <h4> <i> Peter Senge, Founder, Society for Organisational Learning </i> </h4> 
                    <br /> 
                    <p className="lead">Inspired by Senge's philosophy, a group of young corporate professionals came together to set up Adisom Welfare Foundation to work with grassroots initiatives for effecting positive changes in the lives of underprivileged children, their families and communities.</p>
                    <br /> 
                    <hr className="my-2" />
                     <p> Our aims and objectives are given as under </p>
                        {this.renderAimsAndGoals()}
                        <br />
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </div>
            )
    }

    renderSideMenu = () => {
        return(
            <p> WORK IN PROGRESS  </p> 
        )
    }

    renderJumboTron = () => {
        return(
            <div>
                <Container> 
                    <Row> 
                        <Col xs="3"> {this.renderSideMenu()} </Col> 
                        <Col xs="9"> 
                            <Jumbotron>
                                {this.renderContentForJumboTron()}
                            </Jumbotron>
                        </Col> 
                    </Row>
                        
                </Container>
      </div>
        )
    }

    render() {
        return(
            <div> 
                {this.renderJumboTron()}
                </div> 
        )
    }

}