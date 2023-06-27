import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
 
  Nav,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        display: "block",
        
      }}
    >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Photo Gallary</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" className='my_nav'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="image" className='my_nav'>Photo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/video" className='my_nav'>Video</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/audio" className='my_nav'>Audio</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
