import React, { Component } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Work from "../Pages/Ourworks";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";

import logo from "./image/logo.png"

export default class Header extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    className="logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto nav">
                                    <Link className="link" to="/Portfolio/">Home</ Link>
                                    <Link className="link"to="/about">About us</ Link>
                                    <Link className="link"to="/work">Our work</ Link>
                                    <Link className="link"to="/contacts">Contacts</ Link>
                                    <Link className="link"to="/blog">Blog</ Link>
                                </Nav>
                                <Form inline>
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-2"
                                    />
                                    <Button variant="outline-info">Search</Button>
                                </Form>

                            </Navbar.Collapse>

                        </Container>
                    </Navbar>

                    <Switch>
                        <Route exact path="/Portfolio/" component={Home} />
                        <Route  path="/about" component={About} />
                        <Route  path="/work" component={Work} />
                        <Route  path="/contacts" component={Contact} />
                        <Route  path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}
