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
            formDetails: {
                name: "",
                email: "",
                phoneNumber: "",
                address: "",
                message: ""
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

                {/* <Card>
                    <CardImg style={{width: "20%", heigth:"20%"}} top width="100%" src="/assets/images/mark_pandey.jpg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Mrs. Atul Kumar </CardTitle>
                    <CardSubtitle>Vice President</CardSubtitle> GALLERY, PLACES WHERE FUNCTIONING CURRENTLY, STORY BEHIND ADISOM 
                    <CardText>A text like i would be very happy to resolve your queries .... </CardText>
                    </CardBody>
                </Card> */}
            </div> 
        )
    }

    validateDataAndSendEmail = (event) => {
        event.preventDefault();
        let formDetails = this.state.formDetails;
        if (formDetails.name === "" 
            || formDetails.email === "" 
            || formDetails.phoneNumber === "" 
            || formDetails.address === ""
            || formDetails.message === "") {
                alert("Please fill all the entries before sending the email");
            } else {
                console.log(process.env.USER_ID, "122222222222");
                console.log(process.env.TEMPLATE_ID, "000000000000");
                let params = {
                    from_name: formDetails.email,
                    to_name: "testing.purposes.adisom@gmail.com",
                    subject: "QUERIES/SUGGESTIONS REGARDING ADISOM",
                    message_html: formDetails.message
                }

                emailjs.send(
                    'gmail',
                    "template_1BFNxFZR",
                    params,
                    "user_yyzDCcAk71RHZpB1EpFTi"
                )
            }
    }

    resetAllFields = (event) => {
        event.preventDefault();
        let updatedFormDetails = {
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
            message: ""
        }

        this.setState({formDetails: updatedFormDetails});
    }

    handleChange = (arg ,event) => {
        event.preventDefault();
        let currentObject = this.state.formDetails;
        let value = event.target.value;
        switch (arg) {
            case "name":
                currentObject.name = value;
                break;

            case "email": 
                currentObject.email = value;
                break; 
            
            case "phone": 
                currentObject.phoneNumber = value;
                break;

            case "address": 
                currentObject.address = value;
                break;

            case "message": 
                currentObject.message = value;
                break;

            default: 
                break;
        }
        this.setState({formDetails: currentObject});
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
                <Button onClick={(e) => this.resetAllFields(e)}>Reset</Button>
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

    render() {
        return(
            <div> 
                {this.renderDetailsSection()}
                {this.renderContactUsForm()}
                <br /> 
                <br /> 
                <MapContainer /> 
            </div>
        )
    }
}
