import { Button, Container} from "react-bootstrap";
import {Row, Col } from 'react-bootstrap';
import landing from '../assets/landingPage.svg';
import hero from '../assets/hero.svg'
import '../styles/Home.css'


export const Home = () => {

    return(
        <>
        <div className="bg-wrap">
            <Container className="py-5">
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <h1 id="hero-title" className="mb-5"> <span id="hero-purr">PURR</span>fect <span id="hero-meow">MEOW</span>del</h1>
                            <p id="hero-paragraph" className="mb-5">
                            Welcome to Purrfect Meowdel! A whimsical blog celebrating the lives of cat moms and their adorable feline friends. 
                            Delve into heartwarming stories, playful antics, and the purr-fect bond between mothers and their mischievous meowdels.
                            </p>

                        <Button href="/blogs" className="mb-5">Read our Pawsome Tales!</Button>
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
                    <Col md={6} className="d-flex justify-content-center">
                    <img
                        src={landing}
                        alt="Landing Page"
                        className="img-fluid"
                        height="400rem"
                        width="400rem"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}