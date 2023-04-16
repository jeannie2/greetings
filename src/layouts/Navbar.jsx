import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

// <FontAwesomeIcon icon="fa-solid fa-face-grin-wide" spin style={{ color: '#000000' }} />
import { useAuth } from '@/contexts/auth'

export default function CompsLayoutsNavbar() {
  const { user, apiSignOut } = useAuth()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand>
          <svg id="navbar-svg" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="5px" fill="white" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM388.1 312.8c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19zM208 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64zm128 64c-17.7 0-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64z" /></svg>
          CHEER CARDS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto container-fluid links" defaultActiveKey="/themes/bday">

            <Nav.Link as={Link} href="/themes/bday" className="navbar-nav navbar-left">BIRTHDAY  </Nav.Link>
            <Nav.Link as={Link} href="/themes/thankyou" className="navbar-nav navbar-left">THANK YOU  </Nav.Link>
            <Nav.Link as={Link} href="/themes/congrats" className="navbar-nav navbar-left"> CONGRATS </Nav.Link>

            {
              user ? (
                <>
                  <Nav.Link as={Link} href="/my/cards" className="ms-lg-auto">My Cards</Nav.Link>
                  <Nav.Link onClick={apiSignOut} className="ml-lg-1">Sign out</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} href="/auth/login" className="ms-lg-auto">Login</Nav.Link>
                  <Nav.Link as={Link} href="/auth/signup" className="ml-lg-1">Sign up</Nav.Link>
                </>
              )
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

/* <Navbar.Brand as={Link} href="/">
<Nav.Link as={Link} href="/private" className="navbar-right">PRIVATE</Nav.Link>
 */
