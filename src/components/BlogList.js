import {Button, Card, Col, Container, ListGroup, Placeholder, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import BlogApi from "../api/BlogApi";
import moment from 'moment';

import "../styles/BlogList.css"

// const imageUrl  = "https://cdn.sanity.io/images/ngvsxill/production/"

export const BlogList = () => {


    const[postData, setPostData] = useState([]);
    const[show, setShow] = useState(false);

    useEffect(()=> {
      BlogApi.getPosts(setPostData);

      setTimeout(() => {
        setShow(true);
      }, 1000);

    }, [])

    return(
      <>
        <Container className="">
          <h1 className="fw-bold text-uppercase">Blog Posts</h1>
          <p className="text-wrap fw-medium fst-italic" style={{width: "50rem"}}>Explore the delightful tales and charming adventures of our whiskered wonders. From heartwarming anecdotes to playful escapades, our cat blog is a treasure trove of feline magic. Dive into the enchanting world of cats and uncover their purrsonal stories shared by devoted cat lovers and fellow paw-rents. Meowvelous reads await you!</p>
        </Container>

        <Container className="mx-auto">
          
         
            <Row className="mx-auto">
              {postData.map((post, i) => (

                show === true ? (
                  // <ListGroup.Item key={i} id="blogListItem" action href={`/blog/${post._id}`} variant="light" className="d-flex justify-content-between align-items-start">
                  //   <Container>
                  //     <h4 className="text-secondary-emphasis">{post.title}</h4>
                  //     <p className="text-muted d-inline-block text-truncate" style={{maxWidth: "300px"}}>{post.body[0].children[0].text}</p>
                  //     <p><small className="text-muted">Posted on {moment.utc(post.publishedAt).format('MM/DD/YYYY @hh:mm A')}</small></p>
                  //   </Container>
                  //   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  //     <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  //   </svg>
                  // </ListGroup.Item>
                  
                  <Col key={post._id} md={4}>
                      <div key={post._id} id="productCard" className="card text-center m-3 align-content-center text-white bg-dark" >
                        <img id="cardImage" className="card-img" src={BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title"/>
                          <div className="card-img-overlay">
                            <div className="card-header">
                              <h4 id="productName" className="card-title">{post.title}</h4>
                            </div>
                            <p className="card-text text-truncate">
                              {post.body[0].children[0].text}
                            </p>
                            <Button href= {`/blog/${post._id}`}className="mb-5">Read More!</Button>
                            <div className="card-footer">
                                <small className="">
                                    Posted on {moment.utc(post.publishedAt).format('MM/DD/YYYY @hh:mm A')}
                                </small>
                                
                              </div>
                        </div>
                      </div>
                    </Col>




                ):(
                  <>
                    <h1>LOADING...</h1>
                  </>
                )
            
               ))}
            </Row>



        </Container>
      </>
    // <Container className="mt-5">
    //   <h1 className="mb-4">Purrfect Blog</h1>
    //   {postData.map((post) => {
    //     {
    //       console.log(post);
    //       console.log("Title: " + post.title);
    //       console.log("Id: " + post._id);
    //       console.log("Content: " + post.body[0].children[0].text);
    //       console.log("Image: " + BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg'))

    //     }
    //   })}
    //   <Row>

    //     {
    //       postData.map((post) => (

    //         show === true ? (

              
    //           <Col key={post._id} md={4}>
    //             <div key={post._id} id="productCard" className="card text-start text-center m-3 align-content-center" style={{width: "18rem"}}>
    //               <img className="card-img-top" src={BlogApi.getImageUrl() + post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title" style={{height: "15rem"}}/>
    //                 <div className="card-body">
    //                   <h4 id="productName" className="card-title" style={{color: "#3D2813"}}>{post.title}</h4>
    //                   <p className="card-text text-muted text-truncate" style={{height: "2rem"}}>

    //                     {post.body[0].children[0].text}
    //                   </p>
    //                   <Button href= {`/blog/${post._id}`}className="mb-5">Read More!</Button>
    //                   <div className="card-footer">
    //                       <small className="text-muted">
    //                           Posted on {moment.utc(post.publishedAt).format('MM/DD/YYYY @hh:mm A')}
    //                       </small>
                          
    //                 </div>
    //             </div>
    //             </div>
    //           </Col>
    //           ) : (
    //             <Col md={4}> 
    //             <Card className="text-center m-3" style={{ width: '18rem' }}>
    //                 <Card.Img variant="top" src="holder.js/100px180" style={{ height: '20rem' }} />
    //                 <Card.Body>
    //                     <Placeholder as={Card.Title} animation="glow">
    //                         <Placeholder xs={6} />
    //                     </Placeholder>
    //                     <Placeholder as={Card.Text} animation="glow">
    //                         <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
    //                         <Placeholder xs={6} /> <Placeholder xs={8} />
    //                     </Placeholder>
    //                 </Card.Body>
    //               </Card>
    //               </Col>
    //           )
    //       )
    //     )}
    //   </Row>
    // </Container>
    )
}