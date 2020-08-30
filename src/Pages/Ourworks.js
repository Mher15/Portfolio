import React, { Component } from "react"
import { Container, Tab, Nav, Row, Col, CardImg, Media, ListGroup, Card, Item } from 'react-bootstrap';

import Animaci from "./Animaciaa/Animaci";
import Animaica2 from "./Animacia2/Animaica2";
import Animaica3 from "./Animacia3/Animaica3";
import Animation from "./Animaica 4/Animation";
import Buton from "./Ol Animacia/Button/Buton";


import { CardDeck, Button } from 'react-bootstrap';
import img1 from "../Components/image/works/img1.jpg";
import img2 from "../Components/image/works/img2.jpg";
import img3 from "../Components/image/works/img3.jpg";
import img4 from "../Components/image/works/img4.jpg";
import img5 from "../Components/image/works/img5.jpg";
import img6 from "../Components/image/works/img6.jpg";

export default class Ourworks extends Component {
    render() {
        return (
            <div className="ourworks">
                <Container className="ourworksbg">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="web">
                        <Row>
                            <Col lg={9} >
                                <Tab.Content>
                                    <Tab.Pane eventKey="web" className="bg-grey  text-white pb-3" >
                                        <Container>
                                            <h1 className="text-center m-5 templates">TEMPLATES</h1>
                                            <CardDeck className="my-3">
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img1}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img3}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img2}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                            </CardDeck>
                                            <CardDeck className="my-3">
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img4}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img5}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img6}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                            </CardDeck>
                                            <CardDeck className="my-3">
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img2}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img3}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img5}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                            </CardDeck>
                                            <CardDeck className="my-3">
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img6}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img2}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                                <Card bg="dark">
                                                    <Card.Img
                                                        vatiant="top"
                                                        src={img1}
                                                    />
                                                    <Card.Body >
                                                        <Card.Title className="mr-4 text-info">Template</Card.Title>
                                                        <Button className="mr-3" variant="outline-info">Demo</Button>
                                                        <Button variant="outline-info">Download</Button>
                                                    </Card.Body>
                                                </Card>
                                            </CardDeck>

                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="animatia">
                                        <h1 className="text-center mb-5 templates ">Animacia</h1>

                                        <div>
                                            <Animaci />
                                            <Animaica2 />
                                            <Animaica3 />
                                        </div>
                                        <div>
                                            <Animation />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="hover">
                                        <div className="center mt-3">
                                            <Buton cnopca='center' />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="interesting">
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                            <Col lg={3} >
                                <Nav variant="tabs" className="flex-column mt-2 navbg" >
                                    <Nav.Item>
                                        <Nav.Link className="text-dark" eventKey="web">Web dizayn</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-dark" eventKey="animatia">Animatia</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-dark" eventKey="hover">Hover</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-dark" eventKey="interesting">Interesting to know</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Html/Css</ListGroup.Item>
                                        <ListGroup.Item>JavaScript</ListGroup.Item>
                                        <ListGroup.Item>Java</ListGroup.Item>
                                        <ListGroup.Item>Python</ListGroup.Item>
                                        <ListGroup.Item>C++</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                                <Card className="mt-3">
                                    <Card.Body>
                                        <Card.Title >Side Widget </Card.Title>
                                        <Card.Text>
                                            Provide IT service and support without the cost and complexity of traditional ITSM solutions. Our affordable and transparent pricing lets you get started quickly and deliver value fast. Spin up new services with Jira Service Desk’s intuitive, codeless setup and configuratio
                                </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mt-3">
                                    <Card.Body>
                                        <Card.Title>Web dizayn </Card.Title>
                                        <Card.Text>
                                            Provide IT service and support without  the cost and complexity of traditional the cost and complexity of traditional ITSM solutions. Our affordable and transparent pricing lets you get started quickly and deliver value fast. Spin up new services with Jira Service Desk’s intuitive, codeless setup and configuratio
                                </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}