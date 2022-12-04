import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import React from 'react';
import Button from 'react-bootstrap/Button';

const NavBar = (props) => {
  const token = sessionStorage.getItem('token');
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  }

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
            <NavItem>
               <Nav.Link to="/log" href="/log">User Log</Nav.Link>
            </NavItem>
            <NavItem>
               <Nav.Link to="/analytics" href="/analytics">Analytics</Nav.Link>
            </NavItem>
            {(token && token !== "" && token !== undefined) ?
              <Button onClick={handleLogout}> Logout </Button>
              :
              <Button>Login</Button>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;