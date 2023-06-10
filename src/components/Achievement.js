import React,{Component} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


class Achievement extends Component{
    render(){
        return(
          <Container fluid className="pt-5 pb-0 bg-achievement" id="achieve">

                  <Row>
                      <Col sm="12" className="text-center">
                            <Image src="images/face01.png" className="img-fluid mb-3" width={212} />
                            <h2 className="font-honey text-white mb-4"> Achievements </h2>
                            <Col className="pt-3">
                            <Button className="bg-white rounded-5 text-pink border border-white fw-bold btn-theme"> Merch Shop </Button>
                            <Button className="bg-white rounded-5 text-pink border border-white fw-bold btn-theme"> Lets Collab </Button>
                            <Button className="bg-white rounded-5 text-pink border border-white fw-bold btn-theme"> Doods Donation </Button>
                            <Button className="bg-white rounded-5 text-pink border border-white fw-bold btn-theme"> Link Tree </Button>
                            </Col>
                            <Image src="images/snow-man.png" className="img-fluid" width={373} />
                      </Col>
                  </Row>
          </Container>  
        );
    }
}


export default Achievement;