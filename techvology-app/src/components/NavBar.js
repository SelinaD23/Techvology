import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavbarBrand href="/">Techvology</NavbarBrand>
            <NavItem>
              <Nav.Link to="/leaderboard" href="/leaderboard">Leaderboard</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/login" to="/login">Login</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/donation" to="/donation">Donation</Nav.Link>
            </NavItem>
            <NavItem>
               <Nav.Link to="/action" href="/action">Action</Nav.Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;