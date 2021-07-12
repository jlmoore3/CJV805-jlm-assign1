import "../App.css";
import Movies from "./Movies.js";
import MoviePage from "./MoviePage.js";
import Navmenu from "./Navmenu.js";
import Genres from "./Genres.js";
import Footer from "./Footer.js";
import Login from "./Login";
import Register from "./Register";
import FeaturedMovies from "./FeaturedMovies";
import MovieContext from "../context/MovieContext.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  {
    /* 
      const allMovieData = require("../movies.json");
  useEffect(() => {
    axios.get("https://andchilljlmdata.herokuapp.com/api/movies");
    fetch
      .then((json) => {
        console.log(`Movie data from json-server: `);
        setMovies(json);
        let status = window.sessionStorage.getItem("loggedIn");
        setUser(status);
        console.log(`User: ${user}`);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

 */
  }
  useEffect(() => {
    fetch("https://andchilljlmdata.herokuapp.com/api/movies")
      .then((allMovieData) => {
        return allMovieData.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);
  const [user, setUser] = useState();

  let userHack = window.sessionStorage.getItem("loggedIn");

  const [savedMovies, setSaved] = useState([]);

  const addSaved = (newSaved) => {
    localStorage.setItem("saved", JSON.stringify([...savedMovies, newSaved]));
    setSaved([...savedMovies, newSaved]);
    console.log(`Faves: ${savedMovies}`);
  };

  return (
    <div className="App">
      <MovieContext.Provider value={{ movies, setMovies, savedMovies }}>
        <Router>
          <Switch>
            <header>
              <div className="header-fw">
                <Navmenu setUser={setUser} user={user} />
                <Route
                  exact
                  path="/"
                  component={FeaturedMovies}
                  setUser={setUser}
                />
                {!userHack && <Login user={user} setUser={setUser} />}
              </div>
            </header>
          </Switch>

          <Switch>
            <div className="container">
              {userHack && (
                <>
                  <Route
                    exact
                    path="/"
                    component={Movies}
                    addSaved={addSaved}
                  />
                  <Route path="/register" component={Register} />
                  <Route path="/genres" component={Genres} />
                  <Route path="/:id" component={MoviePage} />
                  <Route path="/?search" component={Movies} />
                </>
              )}
            </div>
          </Switch>

          <Switch>
            <Route path="/" component={Footer} />
          </Switch>
        </Router>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
