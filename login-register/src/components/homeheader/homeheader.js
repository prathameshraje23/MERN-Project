import React from 'react';
import cartlogo from '../../images/cartlogo.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../header/NavbarElements';
  
const Homeheader = ({ setLoginUser }) => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/login' activeStyle>
          <img className="img-fluid" src={cartlogo} style={{ height: '70px' }} alt="" />
          </NavLink>
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={() => setLoginUser({})}>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Homeheader;