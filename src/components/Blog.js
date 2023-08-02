import {Button, Card, Col, Container, Placeholder, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import BlogApi from "../api/BlogApi";
import moment from 'moment';

// const imageUrl  = "https://cdn.sanity.io/images/ngvsxill/production/"

export const Blog = () => {


    const[postData, setPostData] = useState([]);
    const[show, setShow] = useState(false);
    useEffect(()=> {
      BlogApi.getOrders(setPostData);

      setTimeout(() => {
        setShow(true);
      }, 1000);

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
      })}
      <Row>

        {
          postData.map((post) => (

            show === true ? (

              
              <Col key={post._id} md={4}>
                <div key={post._id} id="productCard" className="card text-start text-center m-3 align-content-center" style={{width: "18rem"}}>
                  <img className="card-img-top" src={BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title" style={{height: "15rem"}}/>
                    <div className="card-body">
                      <h4 id="productName" className="card-title" style={{color: "#3D2813"}}>{post.title}</h4>
                      <p className="card-text text-muted text-truncate" style={{height: "2rem"}}>

                        {post.body[0].children[0].text}
                      </p>
                      <Button className="mb-5">Read More!</Button>
                      <div className="card-footer" >
                          <small className="text-muted">
                              Posted on {moment.utc(post.publishedAt).format('MM/DD/YYYY @hh:mm A')}
                          </small>
                          
                    </div>
                </div>
                </div>
              </Col>
              ) : (
                <Col md={4}> 
                <Card className="text-center m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" style={{ height: '20rem' }} />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                    </Card.Body>
                  </Card>
                  </Col>
              )
          )
        )}
      </Row>
    </Container>
    )
}