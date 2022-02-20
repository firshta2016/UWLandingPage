import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

const Cardgrid = () => {
  const cardInfo = [
    {
      image: "https://picsum.photos/200/100",
      title: "The Eiffel Tower",
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
      image: "https://picsum.photos/200/100",
      title: "Taj Mahal",
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
      image: "https://picsum.photos/200/100",
      title: "Great Wall of China",
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
      image: "https://picsum.photos/200/100",
      title: "Burj Khalifa",
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
      image: "https://picsum.photos/200/100",
      title: "Sydney Opera House",
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
      image: "https://picsum.photos/200/100",
      title: "Angkor",
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
  ];

  const Product = (props) => {
    const card = (
      <Card className="mt-4">
        <Card.Body>
          <Card.Img src={props.image} />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    );
    return card;
  };
  const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr];
    if (chunkSize <= 0) return cache;
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
  };

  const productChuncks = chunk(cardInfo, 3);
  const rows = productChuncks.map((productChunck, index) => {
    const productsCol = productChunck.map((cardInfo, index) => {
      return (
        <Col>
          <Product
            title={cardInfo.title}
            image={cardInfo.image}
            text={cardInfo.text}
          />
        </Col>
      );
    });
    return <Row>{productsCol}</Row>;
  });
  return <Container>{rows}</Container>;
};

export default Cardgrid;
