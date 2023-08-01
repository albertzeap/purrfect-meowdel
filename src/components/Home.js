import { Container } from "react-bootstrap"
import { CatCarousel } from "./Carousel"
import {Row, Col, Card } from 'react-bootstrap';
import { MeowNavBar } from "./MeowNavBar";

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
                    <Col md={6}>
                    <img
                        src="landing-page-image.jpg" // Replace with your landing page image URL or local file
                        alt="Landing Page"
                        className="img-fluid"
                    />
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <h1 className="mb-4">Main Title</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
                            justo sed metus volutpat, vel convallis nulla feugiat. Nulla facilisi.
                            Nulla convallis est eget mi tincidunt, vel blandit lectus volutpat.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}