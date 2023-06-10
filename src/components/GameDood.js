import React, { Component } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';


class GameDood extends Component{
    render(){
        return(
            <Container fluid id="dripmap">
                        <Row>
                            <Col md="12" className="p-0">
                                    <Image src="images/game01.jpg" className="img-fluid w-100" />
                            </Col>
                            <Col md="12" className="p-0">
                                    <Image src="images/game02.jpg" className="img-fluid w-100" />
                            </Col>
                            <Col md="12" className="p-0">
                                    <Image src="images/game03.jpg" className="img-fluid w-100" />
                            </Col>
                            <Col md="12" className="p-0">
                                    <Image src="images/game04.jpg" className="img-fluid w-100" />
                            </Col>
                        </Row>
            </Container>
        );
    }
}


export default GameDood;