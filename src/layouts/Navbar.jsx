// auth/my/cards?
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import { useAuth } from '@/contexts/auth'

export default function CompsLayoutsNavbar() {
  const { user, apiSignOut } = useAuth()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">HOME GREETING CARDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto container-fluid">
            {
              user ? (
                <>
                  <Nav.Link as={Link} href="/my/cards" className="ms-lg-auto">My Cards</Nav.Link>
                  <Nav.Link onClick={apiSignOut} className="ms-lg-auto">Sign out</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} href="/auth/login" className="ms-lg-auto">Login</Nav.Link>
                  <Nav.Link as={Link} href="/auth/signup" className="ms-lg-auto">Sign up</Nav.Link>

                </>
              )
            }

            <Nav.Link as={Link} href="/themes/bday" className="border border-dark border-2 mx-lg-4">Birthday</Nav.Link>
            <Nav.Link as={Link} href="/themes/thankyou" className="border border-dark border-2 mx-lg-4">Thank you</Nav.Link>
            <Nav.Link as={Link} href="/themes/congrats" className="border border-dark border-2 mx-lg-4">Congrats</Nav.Link>

            <Nav.Link as={Link} href="/private" className="border border-dark border-2 mx-lg-4">Private</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

/*
  <Nav.Link as={Link} href="/themes/bday" className="nav-link">Birthday</Nav.Link>

 <Nav.Link onClick={() => { apiSignOut({ callbackUrl: '/' }) }}>Sign Out</Nav.Link>

      {
              session ? (
                <Nav.Link onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Nav.Link>
              ) : (
                <Nav.Link onClick={() => signIn()}>Sign In</Nav.Link>
              )
            }

              <Nav.Link as={Link} href="/ssg"><a className="nav-link">Birthday</a></Nav.Link>
            <Nav.Link as={Link} href="/ssg"><a className="nav-link">Thank you</a></Nav.Link>
            <Nav.Link as={Link} href="/swr"><a className="nav-link">Congrats</a></Nav.Link>

            <Nav.Link as={Link} href="/private"><a className="nav-link">Private</a></Nav.Link>

            <Nav.Link as={Link} href="/auth/login"><a className="nav-link">Login</a></Nav.Link>
            <Nav.Link as={Link} href="/auth/signup"><a className="nav-link">Sign up</a></Nav.Link>
///////

 <Nav.Link onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Nav.Link>

            <Nav.Link as={Link} href="/auth/login"><a className="nav-link">My Cards</a></Nav.Link>
            <Nav.Link as={Link} href="/auth/signout"><a className="nav-link">Sign out</a></Nav.Link>
*/
