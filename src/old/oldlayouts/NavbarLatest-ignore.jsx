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
          <Nav className="me-auto container-fluid">

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

/*

            <Nav.Link as={Link} href="/private" className="border border-dark border-2 mx-lg-4">Private</Nav.Link>

            -----------

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

--------------------------

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link href="/" className="navbar-brand">Home Greeting Cards</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul id="navbar-dynamic-links" className="navbar-nav mb-2 mb-lg-0" />

          <li className="nav-item">
            <Link href="/themes/bday" className="text-decoration-none border p-2">Birthday</Link>
          </li>

          <li className="nav-item">
            <Link href="/themes/thankyou" className="text-decoration-none border p-2">Thank You</Link>
          </li>

          <li className="nav-item">
            <Link href="/themes/congrats" className="text-decoration-none border p-2">Congrats</Link>
          </li>

          <li className="nav-item">
            <Link href="/private" className="text-decoration-none border p-2">Private</Link>
          </li>

          {
              user ? (
                <>
                  <li className="nav-item ms-auto">
                    <Link href="/my/cards" className="text-decoration-none">My Cards</Link>
                  </li>

                  <li className="nav-item ml-1">
                    <Link href="" onClick={apiSignOut} className="text-decoration-none">Sign out</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-auto">
                    <Link href="/auth/login" className="text-decoration-none">Login</Link>
                  </li>

                  <li className="nav-item ml-1">
                    <Link href="/auth/signup" className="text-decoration-none">Sign up</Link>
                  </li>
                </>
              )
*/
