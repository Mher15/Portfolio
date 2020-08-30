import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import images1 from "../Components/image/person1.jpg";
import images2 from "../Components/image/person2.jpg";
import images3 from "../Components/image/person3.jpg";
import desingimg from "../Components/image/8.jpg";
import teamimg from "../Components/image/team.jpg";
import programing from "../Components/image/programing.jpg";
import Buton from "./Ol Animacia/Button/Buton";

import CarouselBox from '../Components/CarouselBox';

import { CardDeck, Card, Button } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2} >
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Desing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programng</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content className="my-3 ">
                                <Tab.Pane eventKey="first" className="bg-dark  text-white pb-3" >
                                    <img className="w-100" src={desingimg} />
                                    <p className="mt-3 px-5">Provide IT service and support without the cost and complexity of traditional Provide IT service and support without the cost and complexity of traditional Provide IT service and support without the cost and complexity of traditional Provide IT service and support without the cost and complexity of traditional ITSM solutions..</p>
                                    <div className="left">
                                        <Buton cnopca='left'/>
                                    </div>
                                    <p className="mt-3 px-5">Provide IT servicp and support without the cost and complexity of traditionalsupport without the cost and complexity of traditionalsupport without the cost and complexity of traditional ITSM solutions..</p>
                                    <div className="center">
                                        <Buton cnopca='center'/>
                                    </div>
                                    <p className="mt-3 px-5 textpp">Provide IT service and support without the cost and complexity of traditional ITSM support without the cost and complexity of traditionalsupport without the cost and complexity of traditionalsupport without the cost and complexity of traditionalsolutions..</p>
                                    <div className="right">
                                        <Buton cnopca='right'/>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="w-100" src={teamimg} />
                                    <p>Provide IT service and support without the cost and complexity of traditional ITSM solutions. Our affordable and transparent pricing lets you get started quickly and deliver value fast. Spin up new services with Jira Service Desk’s intuitive, codeless setup and configuration.</p>
                                    <Container>
                                        <h2 className="text-center m-5">Our team</h2>
                                        <CardDeck className="my-3">
                                            <Card bg="info">
                                                <Card.Img
                                                    vatiant="top"
                                                    src={images1}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Merlin Cenedi</Card.Title>
                                                    <Card.Text> BlinkMacSystemFont Segoe UI Roboto OxygenUbuntu Cantarell Fira Sans Droid Sans Helvetica Neue</Card.Text>
                                                    <Button variant="primary">About team</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card bg="info">
                                                <Card.Img
                                                    vatiant="top"
                                                    src={images2}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Emma Vatson</Card.Title>
                                                    <Card.Text> BlinkMacSystemFont Segoe UI Roboto OxygenUbuntu Cantarell Fira Sans Droid Sans Helvetica Neue</Card.Text>
                                                    <Button variant="primary">About team</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card bg="info">
                                                <Card.Img
                                                    vatiant="top"
                                                    src={images3}
                                                />
                                                <Card.Body>
                                                    <Card.Title>Jon Smit</Card.Title>
                                                    <Card.Text> BlinkMacSystemFont Segoe UI Roboto OxygenUbuntu Cantarell Fira Sans Droid Sans Helvetica Neue</Card.Text>
                                                    <Button variant="primary">About team</Button>
                                                </Card.Body>

                                            </Card>
                                        </CardDeck>
                                       

                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="w-100" src={programing} />
                                    <p className="my-5">Provide IT service and support without the cost and complexity of traditional ITSM solutions. Our affordable and transparent pricing lets you get started quickly and deliver value fast. Spin up new services with Jira Service Desk’s intuitive, codeless setup and configuration.</p>
                                    <CarouselBox />
                                    <p className="my-5">Provide IT service and support without the cost and complexity of traditional ITSM solutions. Our affordable and transparent pricing lets you get started quickly and deliver value fast. Spin up new services with Jira Service Desk’s intuitive, codeless setup and configuration.</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img className="w-100" src="https://habrastorage.org/files/ce5/b31/76b/ce5b3176b2574d6c8e0a857f5630e18f.png" />
                                    <p className="my-5">Provide IT service and support without the cost and complexity of traditional ITSM solutions. Our affordable and transparent pricing lets you get started quickly and deliver value fast. Spin up new services with Jira Service Desk’s intuitive, codeless setup and configuration.</p>

                                    <p className="my-5">Provide IT service and support without the cost and complexity of traditional ITSM solutions..</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}