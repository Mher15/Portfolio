import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import logo from "../Components/image/logo.png"


export default class Contact extends Component {
    render() {
        return (
            <Container className="my-5" >
                <h1 className="text-center">Contact Us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>
                            we'll never share your email with anyone else
                       </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassworld">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as='textarea' rowe ="3" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="d-flex">
                        <Form.Check type="checkbox" Label="Check me out"/>
                        <Form.Check type="checkbox" Label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary"   type="Submit" >Submit</Button>
                </Form>
                <div className="bg_logo">
                    <img src={logo}/>
                </div>
            </Container>
        )
    }
}