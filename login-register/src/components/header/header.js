// import React from "react";
// //import { useHistory } from "react-router-dom"
// import cartlogo from '../../images/cartlogo.png'
// import "./header.css"


// const Header = () => {
//     //const history = useHistory()

//     return (
//         <div>

//             <nav className="header " id="mainNav" >
//                 <div className="container px-4 py-1">

//                     <div className=" mx-auto">

//                         <ul className="navbar-nav mx-auto" >
//                             <li><img className="img-fluid" src={cartlogo} style={{ height: '70px' }} alt="" /></li>
//                             <li className="m-3" ><h3 className="" >Shopping Mart </h3></li>
//                         </ul>


//                     </div>

//                 </div>
//             </nav>
//         </div>
//     );
// }

// export default Header;



import React from 'react';
import cartlogo from '../../images/cartlogo.png'
import "./header.css"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Header = () => {
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
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Header;