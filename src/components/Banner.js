import React,{Component, expression} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Animated} from "react-animated-css";

class Banner extends Component{
    render(){
        return(
            <Container fluid>
                    <Row>
                        <Col md="12" className="p-0 position-relative">
                                <Image src="images/bgbanner02.jpg" className="w-100 img-fluid" />
                                <Col md="center" className="banner-dood position-absolute">
                                <Animated enter="bounceIn" leave="bounceOut" durationChange={1000}>
                                    <Image src="images/full-banner01.png" className="img-fluid" />  </Animated>
                                </Col>
                              
                        </Col>
                    </Row>
                </Container>
        );
    }
}


export default Banner;