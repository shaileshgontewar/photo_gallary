import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        display: "block",
        // width: 550,
        padding: 30,
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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="image">Photo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/video">Video</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/audio">Audio</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
