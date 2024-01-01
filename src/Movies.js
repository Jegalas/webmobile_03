import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MovieList from "./MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  let url = `http://localhost:3000/moviesDB`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <div>
      {" "}
      <div className="container">
        <div className="center">
          <Row xs={1} md={4} className="g-4">
            {movies.map((movieReq) => (
              <MovieList key={movieReq.id} {...movieReq} />
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Movies;
