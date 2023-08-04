import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogApi from "../api/BlogApi";
import { Button, Card, Col, Container, ProgressBar, Row, Spinner } from "react-bootstrap";
import moment from 'moment';
import '../styles/BlogPost.css'



export const BlogPost = () => {

    const[postData, setPostData] = useState([]);
    const[show, setShow] = useState(false);
    const[progressCount, setProgressCount] = useState(0);
    const params = useParams();

    useEffect(() => {

        BlogApi.getPostById(params.id, setPostData);




        const timer = setInterval(() => {
            setProgressCount((oldProgress) => {
                if (100 == oldProgress) return 100;
                return Math.min(oldProgress + 20, 100);
            })
        }, 500)

        setTimeout(() => {
            clearInterval(timer);
            setShow(true);
            // setShow(false);

        }, 2000);

    }, [params.id])

    return(
        <>
            {show === true ? (

                <div id="blogPost">
                    <Container>
                        <Row>
                            <Col md={2}></Col>
                            <Col md={6}>
                                    <section>
                                        <Container>
                                            <Row>
                                                <h1 className=" fs-1 pt-5">{postData[0].title}</h1>
                                                <small className="text-muted pb-5">
                                                    Posted on {moment.utc(postData[0].publishedAt).format('MM/DD/YYYY @hh:mm A')}
                                                </small>                                   
                                                <hr/>
                                            </Row>
                                        </Container>
                                    </section>
                            
                                    <Container>
                                        <Row>
                                            {postData[0].body.map((paragraph) => (
                                                
                                                  paragraph.style === "h1" ? (<h1 key={paragraph.children[0]._key}>{paragraph.children[0].text}</h1>)
                                                : paragraph.style === "h2" ? (<h2 key={paragraph.children[0]._key}>{paragraph.children[0].text}</h2>)
                                                : paragraph.style === "h3" ? (<h3 key={paragraph.children[0]._key}>{paragraph.children[0].text}</h3>)
                                                : paragraph.style === "h4" ? (<h4 key={paragraph.children[0]._key}>{paragraph.children[0].text}</h4>)
                                                : paragraph.style === "blockquote" ? (<blockquote className="bquote" key={paragraph.children[0]._key}>{paragraph.children[0].text}</blockquote>)
                                                : paragraph._type === "image" ? (
                                                        <div className="d-flex justify-content-center">
                                                            <img className="mt-4 mb-4" src={BlogApi.getImageUrl() + paragraph.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title" style={{maxHeight: "15rem", maxWidth: "15rem"}}/>
                                                        </div>
                                                    )
                                                : (<p key={paragraph.children[0]._key}>{paragraph.children[0].text}</p>)

                                            ))}     
                                        </Row>
                                    </Container>
                            </Col>
                            <Col className="d-flex flex-column justify-content-evenly">

                                <div id="fbIframe" className="d-flex flex-column justify-content-center">
                                    <div className="d-flex justify-content-center">
                                        <iframe id="mainIframe" className="mt-5 mb-5" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100094185618902&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={130} style={{border: "none", overflow: "hidden"}} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h4>Thanks for reading this blog!</h4>
                                    </div>
                                </div>
                                <div id="mainImage"className="d-flex justify-content-center">
                                    <img className="mt-5 mb-5" src={BlogApi.getImageUrl() + postData[0].mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg')} alt="Title" style={{maxHeight: "20rem", maxWidth: "20rem"}}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ):(
                <>
                    <div>
                    <Container className="position-absolute top-50 start-50 translate-middle">
                        <ProgressBar now={progressCount} label={`${progressCount}%`} visuallyHidden />
                    </Container>
                   
                    </div>
                </>
            )}
        </>

    )
}