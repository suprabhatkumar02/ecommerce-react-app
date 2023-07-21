import React from "react";
import styles from "./ProductCard.module.css";
import { Button, Card, Carousel } from "react-bootstrap";

// {process.env.PUBLIC_UR}/images/placeholderimage.png
export const ProductCard = ({ id, title, description, images }) => {
  return (
    <Card>
      {images && images?.length > 0 ? (
        <Carousel className={styles.cardCarousel}>
          {images.map((item) => (
            <Carousel.Item key={item}>
              <img src={item} alt={`${item} - image`} loading="lazy" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        "Nothing to show"
      )}
      <Carousel></Carousel>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
