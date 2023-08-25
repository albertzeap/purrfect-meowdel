import {Button, Card, Col, Container, Placeholder, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import BlogApi from "../api/BlogApi";
import moment from 'moment';

// import blogHeroPic from '../assets/blogListHero.jpg'

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
        
        <>
          <Container id="heroSection" className="text-center d-flex align-items-center" fluid role="region" aria-label="heroSection">
              
            <Container id="heroContainer">
              <h1 id="pageTitle" className="fw-bold text-uppercase">Blog Posts</h1>
            </Container>
            {/* <p id="pageDescription" className="text-wrap fw-medium fst-italic" style={{width: "50rem"}}>Explore the delightful tales and charming adventures of our whiskered wonders. From heartwarming anecdotes to playful escapades, our cat blog is a treasure trove of feline magic. Dive into the enchanting world of cats and uncover their purrsonal stories shared by devoted cat lovers and fellow paw-rents. Meowvelous reads await you!</p> */}
          </Container>
        </>

        <main>

        <Container id="blogListSection">
            <Row>
              {postData.map((post, index) => (
                
                show === true ? (                 
                  <Col key={`${post._id}+${index}`} md={4}>
                      {console.log(index)}
                      <Card className="productCard text-center m-2 text-white bg-dark d-flex flex-column" >

                        <div className="position-relative" role="contentinfo" aria-label={post.title}>
                          <img className="cardImage card-img" src={BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title"/>
                            <div className="imageOverlay card-img-overlay d-flex flex-column ">
                             
                              <div className="mb-auto">
                                <h1 className="productName card-title mt-3">{post.title}</h1>
                              </div>
                              {/* <p className="card-text text-truncate mt-auto">
                                {post.body[0].children[0].text}
                              </p> */}
                              <Button 
                                href={`/blog/${post._id}`} 
                                className="readBlogButton mt-2 mb-2"
                                style={{ 
                                        border: "none",
                                        borderRadius: "2em"
                                      }}
                              >
                                Read More!
                              </Button>
                              <Card.Footer className="card-footer bottom-0">
                                  <small className="">
                                      Posted on {moment.utc(post.publishedAt).format('MM/DD/YYYY @hh:mm A')}
                                  </small>
                              </Card.Footer>
                            </div>
                        </div>
                      </Card>
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
        </main>
      </>
    )
}