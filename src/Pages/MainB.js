import React, { Component } from 'react';
import { Container, CardDeck, Card, Button, } from 'react-bootstrap';
import images1 from "../assets/3.jpg";
import images2 from "../assets/4.jpg";
import images3 from "../assets/5.jpg";

export default class Mainb extends Component {
    render(){
        return(
            <div className="our_team">
                    <Container>
                        <h2 className="text-center pt-5 text-white">Our team</h2>
                        <CardDeck className="pb-5  text-white">
                            <Card className="cardbg relat">
                                <Card.Img
                                    className="image"
                                    variant="top"
                                    src={images1}
                                />
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text> BlinkMacSystemFont Segoe UI Roboto OxygenUbuntu Cantarell Fira Sans Droid Sans Helvetica Neue</Card.Text>
                                    <Button variant="outline-light" >About team</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cardbg">
                                <Card.Img
                                    vatiant="top"
                                    src={images2}
                                />
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text> BlinkMacSystemFont Segoe UI Roboto OxygenUbuntu Cantarell Fira Sans Droid Sans Helvetica Neue</Card.Text>
                                    <Button variant="outline-light">About team</Button>
                                </Card.Body>
                            </Card>
                            <Card className="cardbg">
                                <Card.Img
                                    vatiant="top"
                                    src={images3}
                                />
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text> BlinkMacSystemFont Segoe UI Roboto OxygenUbuntu Cantarell Fira Sans Droid Sans Helvetica Neue</Card.Text>
                                    <Button variant="outline-light">About team</Button>
                                </Card.Body>

                            </Card>
                        </CardDeck>
                    </Container>
                </div>
        )
    }
}
