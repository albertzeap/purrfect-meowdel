import { Button, Container, Image } from "react-bootstrap";
import {Row, Col, Card } from 'react-bootstrap';
import landing from '../assets/landingPage.svg';
import hero from '../assets/hero.svg'
import anbu from '../assets/anbuLanding.jpg';
import meow from '../assets/meowLanding.jpg'


const blogPosts = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.',
      author: 'John Doe',
      date: 'June 22, 2023'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.',
      author: 'Jane Smith',
      date: 'June 23, 2023'
    },
    // Add more blog posts as needed
  ];


export const Home = () => {

    return(
        <>
        <div className="bg-wrap">
            <Container className="py-5">
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <h1 className="mb-4">PURRfect MEOWdel</h1>
                            <p className="mb-4">
                            Welcome to Purrfect Meowdel, where cat moms rule the roost and feline adventures steal the show! 
                            Unleash your inner cat lover as we spin whimsical yarns of our purr-fectly charming meowdels and 
                            their adorable escapades. From mischievous antics to heartwarming moments, this blog is a treasure 
                            trove of feline tales. Join the paw-ty and embark on a paws-itively delightful journey through the 
                            lives of our furry, four-legged stars. It's time to get whiskered away by the magic of motherhood and 
                            whiskers combined!
                            </p>

                        <Button className="mb-4">Read our Pawsome Tales!</Button>
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