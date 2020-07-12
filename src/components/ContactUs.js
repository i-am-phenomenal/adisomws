import React, {Component} from 'react';
import {
    Card, 
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    Button,
    Container,
    Row,
    Col
}
from "reactstrap";
import * as emailjs from "emailjs-com";
import MapContainer from './MapContainer';

export default class ContactUsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formParams: {
                name: "",
                message: "",
                email: "",
                subject: ""
            }
        }
    }

    renderDetailsSection= () => {
        return(
            <div> 
                <br />
                <br />
                <br />
                <Card>
                    <CardImg style={{width: "20%", heigth:"20%"}} top width="100%" src="" alt="Card image cap" />
                    <CardBody>
                    <CardTitle> <h3>  <b>FOR ALL GENERAL QUERIES  </b> </h3> </CardTitle>
                    <CardSubtitle>testing.purposes.adisom@gmail.com</CardSubtitle>
                    {/* <CardText>A text like i would be very happy to resolve your queries .... </CardText> */}
                    <br />
                    <CardTitle> <h3>  <b> DONATION RELATED QUERIES </b> </h3> </CardTitle>
                    <CardTitle> Name of the appropriate person -> Firstname Last Name </CardTitle>
                    <CardTitle> testing.purposes.adisom@gmail.com</CardTitle>
                    </CardBody>
                </Card>
            </div> 
        )
    }

    isEmailValidated(emailId) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))
        {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    validateDataAndSendEmail = (event) => {
        event.preventDefault();
        let formParams = this.state.formParams;        
        if (formParams.name === "" 
            || formParams.email === "" 
            || formParams.subject === ""
            || formParams.message === ""
            || !(this.isEmailValidated(formParams.email))
            ) {
                alert("Please fill all the entries before sending the email");
            } else {
                let params = {
                    from_name: formParams.email,
                    to_name: "adisomwelfaresociety@gmail.com",
                    subject: "QUERIES/SUGGESTIONS REGARDING ADISOM",
                    message_html: formParams.message
                }

                emailjs.send(
                    'gmail',
                    "template_1BFNxFZR",
                    params,
                    "user_yyzDCcAk71RHZpB1EpFTi"
                )
                alert("Email has been sent.");
                let updatedFormDetails = {
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                }
        
                this.setState({formParams: updatedFormDetails});
            }
    }

    resetAllFields = (event) => {
        event.preventDefault();
        let updatedFormDetails = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }

        this.setState({formParams: updatedFormDetails});
    }

    handleChange = (event, arg) => {
        event.preventDefault();
        let currentObject = this.state.formParams;
        let value = event.target.value;
        switch (arg) {
            case "name":
                currentObject.name = value;
                break;

            case "email": 
                currentObject.email = value;
                break; 

            case "subject": 
                currentObject.subject = value;
                break;

            case "message": 
                currentObject.message = value;
                break;

            default: 
                break;
        }
        this.setState({formParams: currentObject});
    }

    renderForm = () => {
        let formDetails = this.state.formDetails
        return(
            <Form>
                <FormGroup>
                    <Label for="namel">Name</Label>
                    <Input 
                        type="name" 
                        name="name" 
                        id="name" 
                        placeholder="Enter your name." 
                        value={formDetails.name} 
                        onChange={(e) => this.handleChange("name", e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your Email." 
                        value={formDetails.emails} 
                        onChange={(e) => this.handleChange("email", e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input 
                        type="phone" 
                        name="phone" 
                        id="phone" 
                        placeholder="Enter your Phone Number." 
                        value={formDetails.phoneNumber}
                        onChange={(e) => this.handleChange("phone", e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input 
                        type="address" 
                        name="address" 
                        id="address" 
                        placeholder="Enter your address." 
                        value={formDetails.address}
                        onChange={(e) => this.handleChange("address", e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input 
                        type="textarea" 
                        name="message" 
                        id="message" 
                        value={formDetails.message}
                        placeholder="Enter your message to us."
                        onChange={(e) => this.handleChange("message", e)}
                        />
                </FormGroup>
                <Button onClick={(e) => this.validateDataAndSendEmail(e)}>Submit</Button>
                &nbsp;
                &nbsp;
                <Button >Reset</Button>
            </Form>
        )
    }

    renderFormContainer = () => {
        return(
            <Container> 
                <Row> 
                    <Col xs="7"> {this.renderForm()} </Col>
                    <Col xs="5"> 
                    <img
                        src = "/assets/images/contact_us_image.jpg"
                        alt="First slide"
                      />
                     </Col>
                    </Row>              
            </Container>
        )
    }

    renderContactUsForm = () => {
        return(
            <div> 
                    <br /> 
                    <br /> 
                    <br /> 
                    <h2> <b> Helpdesk </b> </h2>
                    <p> For any grievance, suggestions and queries, kindly write to us. </p> 
                    <p> <i> * All fields are mandatory </i> </p> 
                    {this.renderFormContainer()}
                </div> 
        )
    }

    renderContactForm = () => {
        let details = this.state.formParams;
        return(
            <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea 
                                            class="form-control w-100" 
                                            name="message" 
                                            id="message" 
                                            cols="30" 
                                            rows="9" 
                                            onfocus="this.placeholder = ''" 
                                            onblur="this.placeholder = 'Enter Message'" 
                                            placeholder="Enter your message"
                                            value = {details.message}
                                            onChange = {(e) => this.handleChange(e, "message")}
                                            />                                            
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input 
                                            class="form-control valid" 
                                            name="name" 
                                            id="name" 
                                            type="text" 
                                            onfocus="this.placeholder = ''" 
                                            onblur="this.placeholder = 'Enter your name'" 
                                            placeholder="Enter your name" 
                                            value = {details.name}
                                            onChange = {(e) => this.handleChange(e, "name")}
                                            />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input 
                                            class="form-control valid" 
                                            name="email" 
                                            id="email" 
                                            type="email" 
                                            onfocus="this.placeholder = ''" 
                                            onblur="this.placeholder = 'Enter email address'" 
                                            placeholder="Email" 
                                            value = {details.email}
                                            onChange = {(e) => this.handleChange(e, "email")}
                                            />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input 
                                            class="form-control" 
                                            name="subject" 
                                            id="subject" 
                                            type="text" 
                                            onfocus="this.placeholder = ''" 
                                            onblur="this.placeholder = 'Enter Subject'" 
                                            placeholder="Enter Subject" 
                                            value = {details.subject}
                                            onChange = {(e) => this.handleChange(e, "subject")}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button 
                                    type="submit" 
                                    class="button button-contactForm boxed-btn"
                                    onClick = {(event) => this.validateDataAndSendEmail(event)}
                                    >
                                        Send
                                    </button>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    
                                    <button                                    
                                    type="submit" 
                                    class="button button-contactForm boxed-btn"
                                    onClick={(e) => this.resetAllFields(e)}
                                    >
                                        Reset
                                    </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>F-14/20, Krishna Nagar</h3>
                                <p>New Delhi - 110051</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+91 9873196224</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>adisomwelfaresociety@gmail.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    renderMembers = () => {
        return( 
            <div class="volunteers_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title text-center mb-60">
                        <span>Meet our </span>
                        <h3>
                            Team
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="single_volunteer">
                        <div class="thumb">
                            <img src="/assets/images/Adisom/Member_1.jpg" alt="" />
                            {/* <div class="social_links">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div class="author_name text-center">
                            <h3>Mrs Priyanka Chaturvedi </h3>
                            <span>President</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="single_volunteer">
                        <div class="thumb">
                            <img src="/assets/images/Adisom/Member_2.jpg" alt="" />
                            {/* <div class="social_links">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div class="author_name text-center">
                            <h3>Mr Atul Kumar</h3>
                            <span>Vice President </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="single_volunteer">
                        <div class="thumb">
                            <img src="/assets/images/Adisom/Member_3.jpg" alt="" />
                            {/* <div class="social_links">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div class="author_name text-center">
                            <h3>Ms Priya Chaturvedi</h3>
                            <span>Treasurer</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="single_volunteer">
                        <div class="thumb">
                            <img src="/assets/images/Adisom/Member_4.jpg" alt="" />
                            {/* <div class="social_links">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div class="author_name text-center">
                            <h3>Mrs Sunita Sharma</h3>
                            <span>Member</span>
                        </div>
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
                {this.renderMembers()}
                <br />
                <br />
                <br />
                <br />
                <MapContainer /> 
                <br />
                <br />
                
                {this.renderContactForm()}                
                <br /> 
                <br /> 
            </div>
        )
    }
}
