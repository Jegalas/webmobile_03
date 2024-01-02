import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Card1 from "./assets/card1.jpg";
import Card2 from "./assets/card2.png";
import Card3 from "./assets/card3.png";

const Home = () => {
  const assignments = [
    {
      img: Card1,
      title: "1. Personal Website with Digital Personal Card",
      p: " The first homework of our course was mainly based on our activities during the lectures since creating first website is the best technique to understand all features of HTML and CSS. Actually, a personal website demonstrates information related to preferences, hobbies, and even education of each member. While the digital personal card can be described as a summary of our websites.",
      link: "https://github.com/Jegalas/My-First-WebPage"
    },
    {
      img: Card2,
      title: "2. E-commerce app",
      p: " In this assignment, my task is fetching data from an API and dynamically populating a web page with the loaded data in a user-friendly format.",
      link: "https://github.com/Jegalas/webmobileas2"
    },
    {
      img: Card3,
      title: "3. Flash Card app",
      p: "In this assignment, I developed a Flash Card App using React for educational purposes, where users can create, view, edit, and delete flash cards. Each card contains information on both sides and can be used for learning or memorization. For this assignment, I used React, which is a library of JavaScript",
      link: "https://github.com/Jegalas/webmobile_03"
    },
  ];

  return (
    <div className="assignment">
      <div>
        <p>
          Welcome to my web page. I am Sadig Khudaverdiyev. I am an ADA University student. On this page, I want to show you my assignments from the Web Mobile I course.
        </p>
      </div>
      <div>
        <h3>Assignments</h3>
        <Row xs={1} md={2} className="g-4">
          {assignments.map((card, key) => (
            <Col key={key}>
              <Card>
                <Card.Img variant="top" src={card.img} style={{ height: 200, objectFit: "contain" }} />
                <Card.Body>
                  <Card.Title>
                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                      {card.title}
                    </a>
                  </Card.Title>
                  <Card.Text>{card.p}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
