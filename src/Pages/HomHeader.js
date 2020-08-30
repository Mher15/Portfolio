import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'

export default class HomHeader extends Component {
  
    render() {
        return (
            <div className="homheader">
              <Container>
                        <Row>
                            <Col>
                                <Jumbotron className="text-center homheaderjumbotron text-white my-5">
                                    <h1 className="display-3">Hello, world!</h1>
                                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <hr className="my-2" />
                                    <p>It  loremusesuses utility classes for typography and spacing to space content out within the larger containerIt  loremusesuses utility classes for typography and spacing to space content out within the larger containerIt  loremusesuses utility classes for typography and spacing to space content out within the larger container.</p>
                                    <p className="lead">
                                        <Button variant="outline-light">Learn More</Button>
                                    </p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}
