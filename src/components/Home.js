import { Button, Container} from "react-bootstrap";
import {Row, Col } from 'react-bootstrap';
import landing from '../assets/landingPage.svg';
import hero from '../assets/hero.svg'
import '../styles/Home.css'


export const Home = () => {

    return(
        <>
        <Container fluid className="bg-wrap">
                <Container>

                <Row id="landingPageRow">

                    {/* Text Column */}
                    <Col id="landingPageText" className="d-flex flex-column justify-content-center" role="region" aria-label="landingPageText" >
                            <Container className="mb-4">
                                {/* <h5 className="pb-5 text-capitalize fw-bold">Like reading about cats?</h5> */}
                             
                                    <h1 id="hero-title" className="text-uppercase fw-bold"><span id="hero-purr">PURR</span>fect <span id="hero-meow">MEOW</span>del</h1>
                                    <p id="hero-paragraph" className="fw-medium pb-3">
                                        A whimsical blog celebrating the lives of cat moms and their adorable feline friends. 
                                    </p>

                                    <Button id="callToAction" className="px-4" href="/blogs" role="button" aria-label="Read our Pawsome Tales Button">Read our Pawsome Tales!</Button>
                        

                            </Container>

                            <Container>
                                <img
                                        id="pawPicture"
                                        src={hero}
                                        alt="drawing of cat paws"
                                        className="img-fluid"
                                        />
                            </Container>
                      

                    </Col>

                    {/* Hero Image Column */}
                    <Col className="d-flex align-items-center">
                        <Container className="d-flex justify-content-center align-items-center">
                            <img
                                id="hero-picture"
                                src={landing}
                                alt="cat with sunglasses and hat with text below it saying so cool"
                                className="img-fluid"
                                />
                        </Container>
                    </Col>


                </Row>
    
            </Container>
        </Container>
    </>
    )
}