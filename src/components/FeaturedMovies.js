import React from "react";
import { Carousel, Nav, Button } from "react-bootstrap";
import Ratings from "./Ratings.js";
import { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";

const FeaturedMovies = (props) => {
  const { movies } = useContext(MovieContext);
  const [index, setIndex] = useState(0);

  const FeaturedMovies = movies.filter(function (movie) {
    return movie.Featured;
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} key={movies.id}>
        {FeaturedMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="features">
              <div className="featured-image">
                <img src={movie.Poster} alt={`${movie.Title}`} />
              </div>
              <div className="featured-text">
                <h1>{movie.Title}</h1>
                <h4>
                  {movie.Plot.slice(0, 140)}
                  {movie.Plot.length >= 140 && `...`}
                </h4>
                <ul>
                  {movie.Ratings.map((rating) => (
                    <Ratings Source={rating.Source} Value={rating.Value} />
                  ))}
                </ul>
                <div>
                  <Nav.Link href={`/${movie.id}`}>
                    <Button variant="primary" className="carousel-btn">
                      Watch Now
                    </Button>
                  </Nav.Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedMovies;
