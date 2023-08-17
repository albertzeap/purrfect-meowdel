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
        <Navbar key={expand} expand={expand} className="border-bottom mb-5" sticky="top">
          <Container fluid className="d-flex justify-content-between">
            <Navbar.Brand href="/">
                <img src={logo} height="100px" width="100px" alt='cat logo'/>
                <strong id="navbarBrandText"><span id="navPURR">PURRFECT</span> <span id="navMEOW">MEOWDEL.</span></strong>
            </Navbar.Brand>



            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <a id='homeMenuLink' href='/'>
                    <img src={logo} height="100px" width="100px" alt='cat logo'/> Menu
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-5">
                  {/* <Nav.Link className="pe-5" href="#action1">Photos</Nav.Link> */}
                  <Nav.Link className="pe-5 fw-bold" href="/blogs">
                    <Button id="blogButton" className="">READ BLOGS</Button>
                  </Nav.Link>
                  <Nav.Link>
                    <SocialIcon className="" target="_blank" url="https://www.facebook.com/profile.php?id=100094185618902" style={{ height: 37, width: 37 }}/>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}