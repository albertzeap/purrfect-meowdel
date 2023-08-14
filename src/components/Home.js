import { Button, Container} from "react-bootstrap";
import {Row, Col } from 'react-bootstrap';
import landing from '../assets/landingPage.svg';
import hero from '../assets/hero.svg'
import '../styles/Home.css'


export const Home = () => {

    return(
        <>
        <div className="bg-wrap">
            <Container>
                <Row>
                    <Col md={7} className="d-flex align-items-center">
                        <div>
                            <h1 id="hero-title" className="mb-4 text-uppercase fw-bold"> <span id="hero-purr">PURR</span>fect <span id="hero-meow">MEOW</span>del</h1>
                            <p id="hero-paragraph" className="mb-5 fw-medium fst-italic">
                            Welcome to Purrfect Meowdel! A whimsical blog celebrating the lives of cat moms and their adorable feline friends. 
                            Delve into heartwarming stories, playful antics, and the purr-fect bond between mothers and their mischievous meowdels.
                            </p>

                        <Button id="callToAction" href="/blogs" className="mb-5">Read our Pawsome Tales!</Button>
                        <br/>
                        <img
                                src={hero}
                                alt="hero"
                                className="img-fluid"
                                height="400rem"
                                width="400rem"
                        />
                        </div>

                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                    <img
                        id="hero-picture"
                        src={landing}
                        alt="Landing Page"
                        className="img-fluid"
                        height="550rem"
                        width="550rem"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}