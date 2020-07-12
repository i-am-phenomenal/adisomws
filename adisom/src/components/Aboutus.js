import React, {Component} from 'react';
import { 
    Jumbotron, 
    Button,
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
import SideMenu from './SideMenu';
import '../App.css';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

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
        activeElement: "genesis",
        peopleInvolved: [
            {
                name: "Mrs Priyanka Chaturvedi",
                title: "President",
                info: "To be filled later. She is my mom though."

            },
            {
                name: "Mr. Atul Kumar",
                title: "Vice President",
                info: "To be filled later. On the other hand, he is a polite person."
            },
            {
                name: "Mr. Vikas Tyagi",
                title: "Secretary",
                info: "To be filled later. He looks weird that's all i know about him."
            },
            {
                name: "Ms. Priya Chaturvedi",
                title: "Treasurer",
                info: "To be filled later. I don't have any earthly idea what is she doing here"
            },
            {
                name: "Mrs Sunita Sharma",
                title: "Member",
                info: "It's a little rude that she doesn't have a title. Member sounds ordinary and common."
            }
        ]
        }
    }

    renderAimsAndGoals = () => {
        return(
            <div> 
                    <ListGroup> 
                        {this.state.aims.map(item => 
                            <ListGroupItem>
                                {item}
                            </ListGroupItem>
                        )} 
                    </ListGroup>             
                <br />
            </div>
        )
    }

    renderContentForJumboTron = () => {
            let currentElement = this.state.activeElement;
                    return(
                    <div> 
                        <div id="genesisSection"> 
                            <h3 ><b> "Sustainability, social equality and the environment are now business problems. And corporate leaders can't depend on governments to solve them." </b> </h3>
                            <h4> <i> Peter Senge, Founder, Society for Organisational Learning </i> </h4> 
                            <br /> 
                            <p className="lead">Inspired by Senge's philosophy, a group of young corporate professionals came together to set up Adisom Welfare Foundation to work with grassroots initiatives for effecting positive changes in the lives of underprivileged children, their families and communities.</p>
                            <br /> 
                            <hr className="my-2" />
                            <p className="lead">
                                <Button color="primary">Learn More</Button>
                            </p>
                        </div>

                        <br />
                        <br />
                        <br />

                        <div id="visionSection"> 
                                <ListGroup> 
                                    {this.state.aims.map(item => 
                                        <ListGroupItem>
                                            {item}
                                        </ListGroupItem>
                                    )} 
                                </ListGroup>             
                            <br />
                        </div>

                        <br />
                        <br />
                        <br />

                        <div id="missionSection"> 
                            <Card>
                                <CardBody>
                                Adisom Welfare Foundation is to empower underprivileged children, youth and women through relevant education, innovative healthcare and market-focused livelihood programmes.
                                <br /> 
                                <br />
                                Adisom Welfare Foundation is to deploy best possible methodology and technology for achieving ideal SROI (social return on investment), to practice and promote good governance. To link business competitiveness of the corporate with social development initiatives; also to sensitize privileged children, youth and citizens in general to promote Civic Driven Change.
                                </CardBody>
                            </Card>

                        </div> 

                        <br />
                        <br />
                        <br />

                        <div id="peopleSection"> 
                         {this.state.peopleInvolved.map(object => 
                            <div>
                            <Card style={{width:"70%"}}>
                              <CardImg style={{width: "20%", heigth:"20%"}} top  src="/assets/images/troll.png" alt="Card image cap" />
                              <CardBody>
                                <CardTitle><h4> {object.name} </h4> </CardTitle>
                                <CardSubtitle>{object.title}</CardSubtitle>
                                <CardText>{object.info}</CardText>
                              </CardBody>
                            </Card>
                          </div>
                         )}
                        </div> 

                        <br />
                        <br />
                        <br />

                        <div id="approachSection">     
                            <Card> 
                                <CardBody> 
                                    <b> Adisom Welfare Foundation </b> believes that education is both the means as well as the end to a better life: the means because it empowers an individual to earn his/her livelihood and the end because it increases one's awareness on a range of issues - from healthcare to appropriate social behaviour to understanding one's rights - and in the process help him/her evolve as a better citizen. Education is the most effective tool which helps children build a strong foundation; enabling them to free themselves from the vicious cycle of ignorance, poverty and disease.
                                    <br /> 
                                    <br /> 
                                    <b> Adisom Welfare Foundation </b> realised that Education for Children cannot be achieved without the family, particularly, unless the mother is assured of health care and empowered. Moreover, when an elder sibling is educated and relevantly skilled to be employable and begins earning, the journey of empowerment continues beyond the present generation.
                                    <br /> 
                                    <br /> 
                                    <b> Adisom Welfare Foundation </b> extended its thematic areas of intervention by supporting family health, livelihood, and women empowerment. Children, their families and the community become the target group for Adisom Welfare Foundation's activities as child education cannot be done in isolation and nothing else but education for children can bring long lasting change in the society.
                                    </CardBody>
                            </Card> 
                        </div> 
                    </div> 
            )
    }

    returnUpdatedActiveElement = () => {
        let element = this.state.activeElement; 
        if(element  == "people") {
            return "PEOPLE BEHIND ADISOM";
        } else {
            return element.toUpperCase();
        }
    }

    renderSideMenuTitle = () => {
        let activeElement = this.returnUpdatedActiveElement()
        return(
        <Card>
            <CardBody>
                {activeElement} 
            </CardBody>
      </Card>
        )
    }

    handleClick = element => {
        this.setState({activeElement: element});
        let updatedId = element + "Section"; 
        var fetchedElement =  document.getElementById(updatedId);
        fetchedElement.scrollIntoView()
    }

    renderSideMenuOptions = () => {
        let currentElement = this.state.activeElement;
        return(
             // Work in progress 
        <div style={{position: "", bottom: 250, right: 1250 }}>
            <p />
            <h3> {this.renderSideMenuTitle()}</h3>
            <SideMenu 
                args={["genesis", "vision", "mission", "people", "approach"]}
                onClickAction={this.handleClick}
            />
        </div>
        )
    }

    renderSideMenu = () => {
        return(
            <div> 
                {this.renderSideMenuOptions()}
            </div> 
        )
    }

    renderJumboTron = () => {
        return(
            <div>
                <Container> 
                    <Row> 
                        <Col xs="3"> {this.renderSideMenu()} </Col> 
                        <Col xs="9"> 
                            <Jumbotron >
                                {this.renderContentForJumboTron()}
                            </Jumbotron>
                        </Col> 
                    </Row>                       
                </Container>
      </div>
        )
    }

    renderSubSection = () => {
        return(
            <div class="about_page">
        <div class="container">
            <br /> 
            <br /> 
            <br /> 
            <div class="row">
                <div class="col-xl-6 col-md-6">
                    <div class="about_image">
                        <img src="/assets/images/2.png" alt="" />
                    </div>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="about_image">
                        <img src="/assets/images/1.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="about_info">
                        <h3> <FaQuoteLeft /> Sustainability, social equality and the environment are now business problems
                        and corporate leaders can't depend on governments to solve them. <FaQuoteRight />  </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-md-6">
                    <div class="about_text_info">
                        <p>Inspired by Senge's philosophy,  a group of young corporate professionals came together in 2020
                            to set up Adisom Welfare Foundation to work with grassroots initiatives for effecting positive changes in the lives of underprivileged
                             children, their families and communities. </p>

                        <p>We work as a catalyst in bringing sustainable change in the lives of underprivileged children, youth and women, with a life-cycle approach of development. 
                                We also try to enable the civil society across the world to engage proactively in the change process through the philosophy of civic driven change.
                                Along with that, one of our primary focus is to adopt highest standards of governance to emerge as a leading knowledge and technology driven, innovative and scalable international development organisation. </p>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="about_text_info">
                        <p> 
                            Adisom Welfare Foundation is to empower underprivileged children, youth and women through relevant education, innovative healthcare and market-focused livelihood programmes.
                            Adisom Welfare Foundation is to deploy best possible methodology and technology for achieving ideal SROI (Social Return on Investment), to practice and promote good governance. To link business competitiveness of the corporate with social development initiatives; also to sensitize privileged children, youth and citizens in general to promote Civic Driven Change.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }

    render() {
        return(
            <div> 
                {/* {this.renderCustomBanner()} */}
                {this.renderSubSection()}
                {/* {this.renderJumboTron()} */}
                </div> 
        )
    }
}