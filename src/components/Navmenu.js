import React from "react";
import logo from "../logo.svg";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

const Navmenu = (props) => {
  let userHack = window.sessionStorage.getItem("loggedIn");
  return (
    <>
      <Navbar className="navbar nobr">
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/genres">Genres</Nav.Link>
          <Nav.Link href="/mymovies">My Movies</Nav.Link>
        </Nav>
        <div className="search-bar">
          <>
            <Nav.Link href="/register">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => props.setUser(true)}
              >
                Register
              </button>
            </Nav.Link>
          </>
          <>
            <Form action="/" method="get">
              <FormControl
                type="text"
                id="nav-search"
                placeholder="Search Movies"
                name="search"
              />
              <Button type="submit">Go!</Button>
            </Form>
            {userHack && (
              <button
                className="btn btn-secondary logout"
                type="submit"
                onClick={() => window.sessionStorage.setItem("loggedIn", false)}
              >
                Logout
              </button>
            )}
          </>
        </div>
      </Navbar>
    </>
  );
};

export default Navmenu;
