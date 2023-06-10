import React, {Component} from 'react';
import { Container,Row, Image, Col } from 'react-bootstrap';


class DoodHouse extends Component{
    render(){
        return(
            <Container className="pt-5 pb-5 maxWidth900px">
                <Row className="pt-3">
                    <Col md="12">
                        <Image src="images/dood-house-img.png" className="img-fluid w-100" />
                    </Col>
                    <Col md="12">
                        <Image src="images/bed-img.png" className="img-fluid w-100" />
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default DoodHouse;