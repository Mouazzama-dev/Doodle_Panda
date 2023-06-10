import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


export default class WhitePaper extends Component{
    render(){
        return(
                <Container className="pt-5 pb-5">
                    <Row className="pt-4">
                        <Col md="12 text-center pb-4 position-relative">
                            <Image src="images/arrow01.png" className="arrow-right" />
                            <h1 className="text-white font-honey text-uppercase"> WhitePaper </h1>
                        </Col>
                        <Col md="6 text-end" xs="6">
                            <Image src="images/whitecase-panda.png" className="img-fluid" style={{ width:'80%' }} />
                        </Col>
                        <Col md="6" xs="6" className="mt-auto">
                            <a href="#"><Image src="images/whitepaper01.png" className="img-fluid" style={{ width:'55%' }} /></a>
                        </Col>
                    </Row>
                </Container>
        );
    }
}