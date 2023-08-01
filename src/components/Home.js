import { Container } from "react-bootstrap"
import { CatCarousel } from "./Carousel"
import {Row, Col, Card } from 'react-bootstrap';

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
        <div>
           <Container className="mt-5">
            <h1 className="mb-4">Welcome to My Blog</h1>
            <Row>
                {blogPosts.map((post) => (
                <Col key={post.id} md={4}>
                    <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                        <Card.Footer>
                        <small className="text-muted">
                            {`Posted by ${post.author} on ${post.date}`}
                        </small>
                        </Card.Footer>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
    </Container>
        </div>
    )
}