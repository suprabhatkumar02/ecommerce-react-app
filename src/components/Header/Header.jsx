import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div style={{ background: `#efefef`, padding: `20px` }}>
      <Container>
        <Row>
          <Col xs={4}>
            <Link to={`/`}>Home</Link>
          </Col>
          <Col xs={4}>
            <Link to={`/product-page`}>Products</Link>
          </Col>
          <Col xs={4}>
            <Link to={`/cart-page`}>Cart</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
