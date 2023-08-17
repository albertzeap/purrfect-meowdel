import {Button, Card, Col, Container, ListGroup, Placeholder, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import BlogApi from "../api/BlogApi";
import moment from 'moment';
import blogHeroPic from '../assets/blogListHero.jpg'

import "../styles/BlogList.css"

// const imageUrl  = "https://cdn.sanity.io/images/ngvsxill/production/"

export const BlogList = () => {


    const[postData, setPostData] = useState([]);
    const[show, setShow] = useState(false);

    useEffect(()=> {
      setShow(false);
      BlogApi.getPosts(setPostData, setShow);

      setTimeout(() => {
        // setShow(true);
      }, 1000);

    }, [])

    return(
      <>
        <Container id="heroSection" className="text-center d-flex align-items-center" fluid>

          <Container id="heroContainer">
            <h1 id="pageTitle" className="fw-bold text-uppercase">Blog Posts</h1>
          </Container>
          {/* <p id="pageDescription" className="text-wrap fw-medium fst-italic" style={{width: "50rem"}}>Explore the delightful tales and charming adventures of our whiskered wonders. From heartwarming anecdotes to playful escapades, our cat blog is a treasure trove of feline magic. Dive into the enchanting world of cats and uncover their purrsonal stories shared by devoted cat lovers and fellow paw-rents. Meowvelous reads await you!</p> */}
        </Container>

        <Container id="blogListSection">
            <Row>
              {postData.map((post, index) => (

                show === true ? (                 
                  <Col key={`${post._id}+${index}`} md={4}>
                      <div id="productCard" className="card text-center m-2 text-white bg-dark d-flex flex-column" >
                        <div className="position-relative">
                          <img id="cardImage" className="card-img" src={BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title"/>
                            <div id="imageOverlay" className="card-img-overlay d-flex flex-column ">
                             
                              <div className="mb-auto">
                                <h4 id="productName" className="card-title mt-3">{post.title}</h4>
                              </div>
                              {/* <p className="card-text text-truncate mt-auto">
                                {post.body[0].children[0].text}
                              </p> */}
                              <Button id="readBlogButton" href= {`/blog/${post._id}`} className="mt-2 mb-2">Read More!</Button>
                              <div className="card-footer bottom-0">
                                  <small className="">
                                      Posted on {moment.utc(post.publishedAt).format('MM/DD/YYYY @hh:mm A')}
                                  </small>
                                  
                              </div>
                            </div>
                        </div>
                      </div>
                    </Col>




                ):(
                  <>
                    <Col key={`${post._id}+${index}`} md={4}> 
                      <Card className="text-center m-2 text-white bg-dark d-flex flex-column">
                      <Card.Img src="holder.js/100px180" style={{height: "30rem"}}/>
                        <Card.ImgOverlay className="d-flex flex-column">
                          <div className="mb-auto">
                            <Placeholder as={Card.Title} className="mt-3" animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                          </div>
                          <Placeholder as={Button} animation="glow">
                            <Placeholder xs={6} />
                          </Placeholder>
                          <Card.Footer className="">
                            <Placeholder xs={4}></Placeholder>
                          </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                   </Col>  
                  </>
                )
            
               ))}
            </Row>
        </Container>
      </>
    )
}