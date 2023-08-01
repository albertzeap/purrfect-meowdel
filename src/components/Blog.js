import {Col, Container, Row } from "react-bootstrap"
import { useState } from "react";


const blogPosts = [
    {
      id: 1,
      title: 'First Blog Post',
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80",
      content: 'This is the content of the first blog post.',
      author: 'John Doe',
      date: 'June 22, 2023'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
      content: 'This is the content of the second blog post.',
      author: 'Jane Smith',
      date: 'June 23, 2023'
    },
    {
      id: 3,
      title: 'Second Blog Post',
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80",
      content: 'This is the content of the second blog post.',
      author: 'Jane Smith',
      date: 'June 23, 2023'
    },
    {
      id: 4,
      title: 'Second Blog Post',
      url: "../assets/anbuLanding.jpg",
      content: 'This is the content of the second blog post.',
      author: 'Jane Smith',
      date: 'June 23, 2023'
    },
    // Add more blog posts as needed
  ];


export const Blog = () => {

    const[postData, setPostData] = useState(null);

    return(
    <Container className="mt-5">
      <h1 className="mb-4">Purrfect Blog</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} md={4}>
            <div key={post.id} id="productCard" className="card text-start text-center m-3 align-content-center" style={{width: "18rem"}}>
            <img className="card-img-top" src={post.url} alt="Title" style={{height: "15rem"}}/>
            <div className="card-body">
                <h4 id="productName" className="card-title" style={{color: "#3D2813"}}>{post.title}</h4>
                <p className="card-text text-muted" style={{height: "5rem"}}>{post.content}</p>
                <div className="card-footer" >
                    <small className="text-muted">
                        Posted by {post.author} on {post.date}
                    </small>
                    
                </div>
            </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    )
}