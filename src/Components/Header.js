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

export default class Header extends Component {
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
                                <Nav className="mr-auto">
                                    <Link to="/Portfolio">Home</ Link>
                                    <Link to="/">Home</ Link>
                                    <Link to="/about">About ut</ Link>
                                    <Link to="/work">our work</ Link>
                                    <Link to="/contacts">Contacts</ Link>
                                    <Link to="/blog">Blog</ Link>
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
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Portfolio" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/work" component={Work} />
                        <Route exact path="/contacts" component={Contact} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}