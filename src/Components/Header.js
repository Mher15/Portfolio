import React ,{ Component } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from "react-bootstrap";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

import Home from "../Pages/Home";
import Work from "../Pages/Ourworks";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";



export default class Header extends Component {
    render(){
        return(
            <>
                <Navbar collapseOnSelect expand ="lg" bg="dark" variant ="dark" >
                    <Container>
                        <Navbar.Brand href = "/">
                        <i className="fab fa-battle-net navbarlogo"></i>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls ="responsive-navbar-nav" />
                        <Navbar.Collapse id ="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href ="/">Home</Nav.Link>
                                    <Nav.Link href ="/about">About ut</Nav.Link>
                                    <Nav.Link href ="/work">our work</Nav.Link>
                                    <Nav.Link href ="/contacts">Contacts</Nav.Link>
                                    <Nav.Link href ="/blog">Blog</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl 
                                        type="text"
                                        placeholder ="Search"
                                        className ="mr-sm-2"
                                        />
                                        <Button variant ="outline-info">Search</Button>
                                </Form>

                        </Navbar.Collapse>

                    </Container>
                </Navbar>
                {/* <Router> 
                    <Switch>
                        <Route exact path ="/" component= {Home}/>
                        <Route exact path ="/about" component= {About}/>
                        <Route exact path ="/work" component= {Work}/>
                        <Route exact path ="/contacts" component= {Contact}/>
                        <Route exact path ="/blog" component= {Blog}/>
                    </Switch>
                </Router> */}
                 
                       <Router  basename='/Portfolio/'> 
                    <Switch >
                        <Route exact path ="/" component= {Home}/>
                        <Route exact path ="/about" component= {About}/>
                        <Route exact path ="/work" component= {Work}/>
                        <Route exact path ="/contacts" component= {Contact}/>
                        <Route exact path ="/blog" component= {Blog}/>
                    </Switch>
                </Router> 
            </>
        )
    }
}