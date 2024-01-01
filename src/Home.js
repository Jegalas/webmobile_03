import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Card1 from "./assets/card1.jpg";
import Card2 from "./assets/card2.webp";
import Card3 from "./assets/card3.webp";

const Home = () => {
  const assignments = [
    {
      img: Card1,
      title: "1. Personal Website with Digital Personal Card",
      p: " The first homework of our course was mainly based on our activities during the lectures since creating first website is best    technique to understand all features of HTML and CSS. Actually, personal website demonstrates information related to preferences, hobbies , and even education of each member. While digital personal card can be described as summary of our websites.",
    },
    {
      img: Card2,
      title: "2. YES app",
      p: "It was our second assignment and we were required to developing a real-time weather teller app. In other words, we should calculate  the current geolocation's latitude and longitude by using the Geolocation API and to obtain the current weather at the place mentioned by user by using any weather APIs. The user was able to receive data about weather condition with detailed information(temp, pressure, humidity).Actually, the aim of this assignment was to demonstrate our knowledge of JavaScript, HTML and CSS.",
    },
    {
      img: Card3,
      title: "3. Movie Page",
      p: "Mentioned Homework is our last assignment and we were divided into groups of 3 for this. The main topic of our homework is React. Actually , we should create an interesting website since it is more related to real work of developers. It is miracle for us as we can study how to create such style of website by doing this homework.",
    },
  ];
  return (
    <div className="assignment">
      <div>
        <p>
          Welcome to homepage of Group 14. The team consist of 3 members: <span>Shafiga Hasanova</span> <span>Ulviyya Mammdova</span>{" "}
          <span>Isa Salahov</span> All of us are students at ADA University. The age is going to serve as a source for introducing all assignments
          that our members had during the course of Web & Mobile I.
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
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.p} </Card.Text>
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
