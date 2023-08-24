import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons';
import "../styles/NavBar.css"
import { Button } from 'react-bootstrap';


export const NavBar = () => {
  return (
    <>

      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand}  sticky="top">
          <Container fluid className="d-flex justify-content-between">
            <Navbar.Brand href="/">
                <img src={logo} height="" width="100px" alt='cat logo'/>
                <strong id="navbarBrandText"><span id="navPURR">PURRFECT</span> <span id="navMEOW">MEOWDEL.</span></strong>
            </Navbar.Brand>



            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Nav.Link id='homeMenuLink' href='/'role="button" aria-label="Home">
                    <img src={logo} height="100px" width="100px" alt='cat logo'/> Home
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-5">
                  {/* <Nav.Link className="pe-5" href="#action1">Photos</Nav.Link> */}
                  <Nav.Item>
                    <Nav.Link className="blogLink pe-5 fw-bold" href="/blogs">
                      <Button id="blogButton" >READ BLOGS</Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex align-items-center">
                      <SocialIcon className="" target="_blank" url="https://www.facebook.com/profile.php?id=100094185618902" style={{ height: 37, width: 37 }} role="button" aria-label="Facebook Page"/>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}