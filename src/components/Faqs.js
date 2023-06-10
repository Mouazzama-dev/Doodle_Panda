import React, { Component } from 'react';
import { Col, Container, Row, Image, Accordion } from 'react-bootstrap';


class Faqs extends Component{
    render(){
        return(
            <Container fluid className="bg-purple" id="faq">
                <Container>
                    <Row>
                        <Col md={8} className="mt-auto mb-auto pt-5 pb-5 faq-sec">
                            <Col>
                                <h3 className="text-white font-honey"> Have A questions? </h3>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> What makes DoodlePandas NFTs special compared to other NFT projects? </Accordion.Header>
                                        <Accordion.Body>
                                        DoodlePandas stands out with its unique panda-themed artwork, which captures the charm and playfulness of these beloved creatures. Each DoodlePandas NFT is hand-drawn with meticulous attention to detail, making them highly collectible and appealing to art enthusiasts and panda lovers alike.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> Is there a Pre-Sale / Whitelist?  </Accordion.Header>
                                        <Accordion.Body>
                                        Yes, there are a total of 1000 whitelist spots for access to our Pre-Sale available to our community members. Information on how to secure the WL Spot is available on Discord.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is DoodlePandas and how does it relate to the world of NFTs?</Accordion.Header>
                                        <Accordion.Body>
                                        DoodlePandas is an NFT project that features 4999 unique and adorable panda-themed doodle digital artwork. Each artwork is a one-of-a-kind collectible tokenized on the blockchain, allowing for ownership verification and potential investment value.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header> What will be the price to buy a DoodlePanda in pre-mint?  </Accordion.Header>
                                        <Accordion.Body>
                                        The DoodFam & Alphas have decided to keep the price of pre-mint to 0.04 ETH
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header> Are you available on other blockchains?  </Accordion.Header>
                                        <Accordion.Body>
                                        No. If you receive a dm about a similar launch on any other chain than Ethereum, or see other projects on OpenSea other than the original links, they are Fake! Report them and let us know.
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header> Are there any limitations or restrictions on the usage of DoodlePandas NFTs?  </Accordion.Header>
                                        <Accordion.Body>
                                        While you own a DoodlePandas NFT, you have the freedom to showcase and display it on various platforms. However, it's essential to adhere to the terms and conditions set by the platform on which you choose to use or display your NFT. Additionally, commercial use or reproduction of the artwork may be subject to copyright restrictions unless explicitly stated otherwise by the project.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>  Will there be more volumes for DoodlePandas?  </Accordion.Header>
                                        <Accordion.Body>
                                        Yes! We have a lot of ideas for our future volumes and other stuff too! Just know, Doodfam is a big community all because of the Real Ones!
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header> How Do I Mint?  </Accordion.Header>
                                        <Accordion.Body>
                                        If you're new to the NFT space don't worry we got you. Visit our Discord for tutorials on how to mint.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header> Can I Mint More Than 1 DoodPanda? </Accordion.Header>
                                        <Accordion.Body>
                                        Yes, you can mint more than 1 DoodPanda.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    </Accordion>
                            </Col>
                        </Col>

                        <Col md={4} className="position-relative text-end mt-auto">
                                <Image src="images/question-panda.png" className="img-fluid panda-move" width={332} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Faqs;