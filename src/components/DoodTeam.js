import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


class DoodTeam extends Component{
    render(){
        return(
            <Container className="pt-5 pb-5" id="team">
                <Row className="pb-4 pt-2">
                    <Col md="12" className="text-center mb-5">
                            <h1 className="text-white font-honey"> Dood Team </h1>
                    </Col>

                    <OwlCarousel items={3} className="owl-theme text-center" loop nav margin={8} 
                     responsive= {
                        {
                            '1':{
                                items: 2
                            },
                            '1025': {
                                items: 3
                            }
                        } } >  
                        <div><img  className="img" src= {'images/team1.jpg'}  className="rounded-5 mb-3" />
                            <h2 className="font-honey text-uppercase text-white"> DoodAlpha </h2>
                            <p className="font-honey text-uppercase text-white fs13px"> CMO | Founder </p>
                        </div>  
                        <div><img  className="img" src= {'images/team2.jpg'} className="rounded-5 mb-3" />
                        <h2 className="font-honey text-uppercase text-white"> PandaGuru </h2>
                            <p className="font-honey text-uppercase text-white fs13px"> CFO | Director </p>
                        </div>  
                        <div><img  className="img" src= {'images/team3.jpg'} className="rounded-5 mb-3" />
                        <h2 className="font-honey text-uppercase text-white"> JOE F. </h2>
                            <p className="font-honey text-uppercase text-white fs13px"> Artist </p>
                        </div>  
                        <div><img  className="img" src= {'images/team1.jpg'} className="rounded-5 mb-3" />
                        <h2 className="font-honey text-uppercase text-white"> PandaGuru </h2>
                            <p className="font-honey text-uppercase text-white fs13px"> CFO | Director </p>
                        </div>  
                        <div><img className="img" src= {'images/team2.jpg'} className="rounded-5 mb-3" />
                        <h2 className="font-honey text-uppercase text-white"> Sponge.B </h2>
                            <p className="font-honey text-uppercase text-white fs13px"> Artist </p>
                        </div>  
                     
                        </OwlCarousel>  
                    
                </Row>
            </Container>
        );
    }
}


export default DoodTeam;