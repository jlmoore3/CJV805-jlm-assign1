import React from "react";
import Movie from "./Movie.js";
import Genres from "./Genres.js";
import MovieContext from "../context/MovieContext.js";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Movies = (props) => {
  const { movies } = useContext(MovieContext);
  const { search } = useLocation();
  const keyword = queryString.parse(search);
  let thisKeyword = "";
  if (keyword.search) {
    thisKeyword = keyword.search.toLowerCase();
  }
  let results = false;
  const mapMovies = movies.map((movie) => (
    <>
      <Movie
        id={movie.id}
        key={movie.id}
        title={movie.Title}
        description={movie.Plot}
        poster={movie.Poster}
        genre={movie.Genre}
        addSaved={props.addSaved}
      />
    </>
  ));

  const filterMovies = movies
    .filter(
      (movie) =>
        movie.Genre.toLowerCase().includes(thisKeyword) ||
        movie.Title.toLowerCase().includes(thisKeyword) ||
        movie.Plot.toLowerCase().includes(thisKeyword) ||
        movie.Writer.toLowerCase().includes(thisKeyword) ||
        movie.Director.toLowerCase().includes(thisKeyword) ||
        movie.Actors.toLowerCase().includes(thisKeyword)
    )
    .map((movie) => (
      <>
        {(results = true)}
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.Title}
          description={movie.Plot}
          poster={movie.Poster}
          genre={movie.Genre}
          addSaved={props.addSaved}
        />
      </>
    ));

  return (
    <div className="row">
      {!thisKeyword && mapMovies}
      {thisKeyword && filterMovies}
      {!results && (
        <>
          <h1>No results</h1>
          <p>Browse by Genre:</p>
          <Genres />
        </>
      )}
    </div>
  );
};

export default Movies;
