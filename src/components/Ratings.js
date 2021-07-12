import React from "react";

const Ratings = (props) => {
  return (
    <>
      {" "}
      <li className="ratings">
        {props.Source.toLowerCase().includes("database") && (
          <img src="/images/imdb-logo.png" alt={props.Source} />
        )}
        {props.Source.includes("Rotten") && (
          <img src="/images/rt-logo.png" alt={props.Source} />
        )}
        {props.Source === "Metacritic" && (
          <img src="/images/metacritic-logo.png" alt={props.Source} />
        )}
        {props.Value}
      </li>
    </>
  );
};

export default Ratings;
