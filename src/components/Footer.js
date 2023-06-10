import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <Container className="pt-5 pb-5">
                <Row className="justify-content-center pt-3 pb-4">
                    <Col md="8" className="text-center">
                        <p className="text-white fs16px text-center pb-2"> We are committed to continuously improving and expanding the DoodlePandas universe to provide our community with engaging experiences and opportunities. Remember, Stronger Together, Here Forever! </p>
                        <h5 className="bg-purple rounded-5 text-white fw-600 text-center mx-auto pt-2 pb-2 mt-4 d-inline-block px-md-4 px-3 fs22px"> For all press inquiries, collabs, contact us at  <a href="mailto:pandasdoodle@gmail.com" className="text-white text-decoration-none"> pandasdoodle@gmail.com </a></h5>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Footer;