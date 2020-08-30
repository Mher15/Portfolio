import React, { Component } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'


export default class footer extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Container>
                    <Row>
                        <Col md="3" className="my-4">
                            <h6 className="text-white">OUR COMPANY</h6>
                            <hr className="bggrape" />
                            <p className="pt-5 text-white">we'll never share your email with anyone elsewe'll never share your email with anyone elsewe'll never share your email with anyone else</p>
                        </Col>
                        <Col md="3" className="my-4">
                            <h6 className="text-white">PRODUCT</h6>
                            <hr className="bggrape" />
                            <p className="pt-5 text-white">PRODUCT for you</p>
                            <p className="text-white">we'll never share</p>
                            <p className="text-white">email with anyone</p>
                        </Col>
                        <Col md="3" className="my-4">
                            <h6 className="text-white">RESOURCES</h6>
                            <hr className="bggrape" />
                            <p className="pt-5 text-white">never share your</p>
                            <p className="text-white">email with anyone </p>
                            <p className="text-white">anyone elsewe'll</p>
                        </Col>
                        <Col md="3" className="my-4">
                            <h6 className="text-white">CONTACT</h6>
                            <hr className="bggrape" />
                            <p className="pt-5 text-white "><i className="fas fa-home mr-3"></i>Armenia/Erevan</p>
                            <p className="text-white"><i className="fas fa-envelope mr-3"></i>mher.janikyan01@gmail.com</p>
                            <p className="text-white"><i className="fas fa-phone-alt mr-3"></i>+37493210919</p>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-secondary py-2"> 
                    <p className="text-center text-white m-0">© 2020 Copyright:<a className="text-dark" href="https://mdbootstrap.com/">MAdevelopment.com</a></p>   
                </div>
            </div>
        )
    }
}