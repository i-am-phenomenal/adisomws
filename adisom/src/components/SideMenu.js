import React, {Component} from "react";
import {
    ListGroup,
    ListGroupItem,
    Card,
    CardBody
}
from "reactstrap";

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            args: this.props.args,
            currentElement: ""
        };
    }

    returnCapitalizedString = (option) => {
        return (option.charAt(0).toUpperCase() + option.slice(1))
    }

    render () {
        const {onClickAction} = this.props;
        let currentElement = this.state.currentElement;
        return(
                <ListGroup> 
                    {this.state.args.map((option => 
                    <ListGroupItem 
                        id={option} 
                        active={currentElement == {option}} 
                        tag="button" 
                        onClick={() => onClickAction(option)} 
                        action
                    >
                        {this.returnCapitalizedString(option)}
                    </ListGroupItem>          
                    ))}
            </ListGroup>
        )
    }
}