import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogApi from "../api/BlogApi";
import { Col, Container, ProgressBar, Row, Spinner } from "react-bootstrap";
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
        }, 599)

        setTimeout(() => {
            clearInterval(timer);
            setShow(true);
            // setShow(false);

        }, 4000);

        // return () => {
        //     clearInterval(timer);
        //     setShow(false);
        // };

    }, [params.id])

    return(
        <>
            {show === true ? (

                <div id="blogPost">
                    <header>
                        <section>
                            <Container className="text-center">
                                <Row>
                                    <h1>{postData[0].title}</h1>
                                    <small className="text-muted">
                                        Posted on {moment.utc(postData[0].publishedAt).format('MM/DD/YYYY @hh:mm A')}
                                    </small>
                                </Row>
                            </Container>
                        </section>
                    </header>
                    <Container>
                        <Col md={4}>
                        </Col>
                        <Col>
                            {postData[0].body.map((paragraph) => (
                                <p key={paragraph.children[0]._key}>{paragraph.children[0].text}</p>
                            ))}
                        </Col>
                        <Col md={4}></Col>               
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