import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';




class BenefitUtility extends Component{
    render(){
        return(
            <Container fluid className="pt-5 pb-5 left-right-wind position-relative">
                <Container>
                        <Row className="justify-content-center">
                            <Col md="9" className="text-center">
                                <h1 className="text-white font-honey"> Benefits & <span className="d-sm-block lh-lg"> Utilities </span> </h1>
                                <p className="text-white"> If you own a DoodlePanda, you definitely have access to one of the best communities in the NFT space. Why? Because we’re here to build a community that stays 
                                forever and not temporary. Not only this, for the holders of Doodle Panda, there are no. of other genuine benefits that are listed below: </p>
                                <Image src="images/ring01.png" className="img-fluid mt-3" width={85} />
                            </Col>

                            <Col md="8" className="text-center mt-4">
                                <h2 className="text-white fw-bold"> Part of DoodleDigital Agency </h2>
                                <p className="text-white mb-0">  We aim to provide value to the holders through a 360 Digital Marketing Agency that not just provides only low-cost high-return services to the holders but, also opens remote employment opportunities and other IRL perks. </p>
                                <Image src="images/assets03.png" className="img-fluid float-end" width={85} />
                            </Col>

                            <Col md="8" className="text-center mt-4">
                                <h2 className="text-white fw-bold"> DoodlePanda Merchandise  </h2>
                                <p className="text-white">  Dood holders will be able to get their hands on some of the funkiest, unique & coolest merch with major discounts and offers to avail. </p>
                                <Image src="images/assets04.png" className="img-fluid float-start" width={125} />
                            </Col>

                            <Col md="8" className="text-center mt-4">
                                <h2 className="text-white fw-bold"> NFT education hub </h2>
                                <p className="text-white"> The holders of our NFT will gain access to our educational hub where they can avail of our NFT training courses, NFT launch strategies, etc. at discounted or with fees that is close to none. </p>
                                <Image src="images/assets03.png" className="img-fluid float-end" width={85} />  
                          </Col>

                            <Col md="8" className="text-center mt-4">
                                <h2 className="text-white fw-bold"> Blue-chip Projects WL spots </h2>
                                <p className="text-white mb-0"> Blue chip stocks have a proven record of being the safest investments leading to success and growth. The DoodlePandas NFT holder will gain access & signals to other blue-chip projects for safe investment. </p>
                               </Col>

                        </Row>

                    <Row className="position-relative before-circle mt-4">
                        <Col md="6" className="text-end px-sm-4 px-2 text-center text-sm-end">
                            <Image src="images/ques01.png" className="img-fluid" width="190"></Image>
                            <Col className="d-block">
                                <Image src="images/assets02.png" className="img-fluid" width="255" />
                            </Col>
                        </Col>
                        <Col md="6" className="px-2 px-sm-4 text-center text-sm-start">
                            <Image src="images/assets01.png" className="img-fluid d-sm-inline-block d-none" style={{ width:"70%" }} />
                          </Col>

                    </Row>
                 </Container>
            </Container>
        );
    }
}

export default BenefitUtility;