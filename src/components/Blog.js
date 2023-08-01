import {Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import BlogApi from "../api/BlogApi";

// const imageUrl  = "https://cdn.sanity.io/images/ngvsxill/production/"

export const Blog = () => {


    const[postData, setPostData] = useState([]);
    useEffect(()=> {
     
      BlogApi.getOrders(setPostData);
      

      // console.log(postData[0].title)

    }, [])

    return(
    <Container className="mt-5">
      <h1 className="mb-4">Purrfect Blog</h1>
      {postData.map((post) => {
        {
          console.log(post);
          console.log("Title: " + post.title);
          console.log("Id: " + post._id);
          console.log("Content: " + post.body[0].children[0].text);
          console.log("Image: " + BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg'))

        }
        // <Col key={post._id}>

        // </Col>
        // <h1>{post.title}</h1>
      })}
      <Row>


        {postData.map((post) => (
          <Col key={post._id} md={4}>
            <div key={post._id} id="productCard" className="card text-start text-center m-3 align-content-center" style={{width: "18rem"}}>
            <img className="card-img-top" src={BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title" style={{height: "15rem"}}/>
            <div className="card-body">
                <h4 id="productName" className="card-title" style={{color: "#3D2813"}}>{post.title}</h4>
                <p className="card-text text-muted" style={{height: "5rem"}}>{post.body[0].children[0].text}</p>
                <div className="card-footer" >
                    <small className="text-muted">
                        Posted on {post.publishedAt}
                    </small>
                    
                </div>
            </div>
            </div>
          </Col>
        ))}
        {/* {blogPosts.map((post) => (
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
        ))} */}
      </Row>
    </Container>
    )
}