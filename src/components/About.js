import React, {Component} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


class About extends Component{
    render(){
        return(
            <Container className="pt-4 pb-4" id="about">
                <Row>
                    <Col md="12" className="text-center">
                        <Image src="images/about-cap.png" className="img-fluid"  width={120} />
                        <h2 class="text-white text-uppercase font-honey mt-2 mb-3"> About Doods </h2>
                        <p className="fs20px text-white col-sm-8 mx-auto"> DoodlePanda is a collection of 4999 1st ever Doodle Art NFT created around the cutest lil Pandas. All the collectibles are 1/1 meaning unique, 
                        & 1 in the whole collection. We’re a vibrant community that goes beyond being a mere collection of adorable NFTs. We are a passionate group of individuals dedicated to revolutionizing the web3 space. 
                        Our alpha-tier NFT offers an array of exclusive benefits designed to empower our holders. </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default About;