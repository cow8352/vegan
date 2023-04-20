import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// 要使用能有active css效果的NavLink元件
import { NavLink, Link } from 'react-router-dom';
// import '~bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css'


function MyNavbar(props) {
  const { auth } = props;

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-BS5-Router6
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* 利用as屬性來作選單link的整合 */}
              {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
              <Nav.Link as={NavLink} to="/about">
                關於我們
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                登入
              </Nav.Link>
              {auth && (
                <Nav.Link as={NavLink} to="/member">
                  會員專區
                </Nav.Link>
              )}
              <NavDropdown title="產品" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/product/earring">
                  耳環
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/product/ring">
                  戒指
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/product/necklace">
                  項鍊
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/product/bracelet">
                  手環/鍊
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/product/bag">
                  包包
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/product/hat">
                  帽子
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link as={NavLink} to="/product/women">
                More deets
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                as={NavLink}
                to="/product/women"
              >
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
