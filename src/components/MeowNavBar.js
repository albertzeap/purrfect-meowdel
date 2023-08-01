import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons';

export const MeowNavBar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Brand href="/">
                <img src={logo} height="100px" width="100px" alt='cat logo'/>
                Purrfect Meowdel
            </Navbar.Brand>

            {/* <Nav.Link href='/'>
                <img src={logo} height="100px" width="100px" alt='cat logo'/>
                Purrfect Meowdel
            </Nav.Link> */}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Purrfect Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="pe-5" href="#action1">Photos</Nav.Link>
                  <Nav.Link className="pe-5" href="#action2">Blog</Nav.Link>
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