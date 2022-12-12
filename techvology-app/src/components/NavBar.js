import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import logoImage from '../images/logo.png';

const NavBar = (props) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("curr_username");

    navigate("/");
  }

  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-md sticky-top bg-dark navbar-shrink py-3" id="mainNav">
        <div class="container"><a class="navbar-brand d-flex align-items-center" href="/">
          <span style={{ marginRight: '10px' }}>
            <img
            alt=""
            src={logoImage}
            width="40"
            height="40"
            className="d-inline-block align-center"
          />{' '}
          </span>
          <span>Techvology</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
          {(token && token !== "" && token !== undefined) ? <>
            <ul class="navbar-nav mx-auto">
                              <li class="nav-item"><a class="nav-link" to="/action" href="/action">Actions</a></li>
                              <li class="nav-item"><a class="nav-link" to="/log" href="/log">Log</a></li>
                              <li class="nav-item"><a class="nav-link" to="/analytics" href="/analytics">Analytics</a></li>
                              <li class="nav-item"><a class="nav-link" to="/leaderboard" href="/leaderboard">Leaderboard</a></li>
                              <li class="nav-item"><a class="nav-link" href="/donation" to="/donation">Donation</a></li>
             </ul><button class="btn border rounded-pill shadow-none" type="button" onClick={handleLogout}>Sign Out</button> </>
            :
              <>
              <ul class="navbar-nav mx-auto">
              <li class="nav-item"><a class="nav-link" href="/donation" to="/donation">Donation</a></li></ul>
              <a class="btn btn-light border rounded-pill shadow-none" type="button" href="/login" to="/login">Login</a>
              </>
          }
          </div>
        </div>
      </nav>
      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/bold-and-dark.js"></script>
    </>
  );
}

export default NavBar;