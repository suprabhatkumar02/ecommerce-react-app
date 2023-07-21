import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ProductsFilter } from "../components/ProductsFilter/ProductsFilter";
import { useProductsContext } from "../components/context/ProductsContext";
import { ProductCard } from "../components/ProductCard/ProductCard";
const ProductPage = () => {
  const { productsList, loading, error } = useProductsContext();

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ProductsFilter />
        </Col>
        <Col xs={9}>
          {loading && <div>LOADING.....</div>}
          <div
            className="grid"
            style={{
              display: `grid`,
              gridTemplateColumns: `repeat(3, minmax(0,1fr))`,
            }}
          >
            {productsList
              ? productsList?.map((item) => (
                  <ProductCard key={item.id} {...item} />
                ))
              : "Empty"}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
