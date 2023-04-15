import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

// <FontAwesomeIcon icon="fa-solid fa-face-grin-wide" spin style={{ color: '#000000' }} />
import { useAuth } from '@/contexts/auth'

export default function CompsLayoutsNavbar() {
  const { user, apiSignOut } = useAuth()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">HOME GREETING CARDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto container-fluid" defaultActiveKey="/themes/bday">

            <Nav.Link as={Link} href="/themes/bday" className="navbar-nav navbar-left">Birthday</Nav.Link>
            <Nav.Link as={Link} href="/themes/thankyou" className="navbar-nav navbar-left">Thank you</Nav.Link>
            <Nav.Link as={Link} href="/themes/congrats" className="navbar-nav navbar-left">Congrats</Nav.Link>
            <Nav.Link as={Link} href="/private" className="navbar-right">Private</Nav.Link>

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
