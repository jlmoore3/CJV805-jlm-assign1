import React from "react";
import MovieContext from "../context/MovieContext.js";
import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";

const Genres = () => {
  const { movies } = useContext(MovieContext);
  const allGenres = [];
  movies.forEach((movie) => allGenres.push(movie.Genre));
  console.log(movies.Genre);

  return (
    <div className="row">
      {allGenres.map((genre) => (
        <div className="col-sm genres">
          <Nav.Link href={`/?search=${genre.split(", ", 1)}`}>
            <Button className="genre-btn">{genre}</Button>
          </Nav.Link>
        </div>
      ))}
    </div>
  );
};

export default Genres;
