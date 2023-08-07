import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons';
import "../styles/NavBar.css"


export const NavBar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="justify-content-between">
          <Container fluid>
            <Navbar.Brand href="/">
                <img src={logo} height="100px" width="100px" alt='cat logo'/>
            </Navbar.Brand>


            {/* <Nav>
              <Nav.Link href='/' className='fw-bold'>
                  Purrfect Meowdel
              </Nav.Link>
            </Nav> */}

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

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link className="pe-5" href="#action1">Photos</Nav.Link> */}
                  <Nav.Link className="pe-5 mb-4 fw-bold" href="/blogs">Blog</Nav.Link>
                  <SocialIcon className="pe" target="_blank" url="https://www.facebook.com/profile.php?id=100094185618902" style={{ height: 35, width: 35 }}/>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}