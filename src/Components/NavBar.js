import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { ROUTES } from "../routes/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="link" to={ROUTES.home}>
            Blog
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link className="link" to={user ? ROUTES.profile : ROUTES.signIN}>
              {user ? "Profile" : "SIGN IN"}
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
