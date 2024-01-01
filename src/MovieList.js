import { Modal, show, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const MovieList = ({ Poster_Link, Series_Title, IMDB_Rating, Overview, Genre, Runtime }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="movie text-center">
      <div className="movie-body">
        <img className="movie-img" style={{ width: "6rem" }} src={Poster_Link} alt={Series_Title} />
        <div className="movie-below">
          <button type="button" className="button" onClick={handleShow}>
            More
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img style={{ width: "10rem" }} src={Poster_Link} alt={Series_Title}></img>
              <h3>{Series_Title}</h3>
              <h6>Overview</h6>
              <p>{Overview}</p>
              <p>IMDB rating: {IMDB_Rating}</p>
              <p>Genre: {Genre}</p>
              <p>Runtime: {Runtime}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
