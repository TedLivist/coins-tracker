import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { clearCoins } from '../redux/coins/coins';
import { logoutUser } from '../redux/users/users';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = () => {

  const checkUser = useSelector(state => state.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">Homepage</NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {checkUser.user && (
              <NavLink to="/coins">Coins</NavLink>
            )}
            {!checkUser.user && (
              <>
                <Nav.Link href='/signup'>Signup</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
              </>
            )}
            {checkUser.user && (
              <div
                className="nav-item"
                onClick={() => {
                  dispatch(logoutUser())
                  dispatch(clearCoins())
                  localStorage.removeItem('loggedInUser')
                  navigate('/')
                }}
              >
                Logout
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;