import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function CardPlanets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.error(err));
  }, []);

  const onError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <div className="container-fluid overflow-scroll d-flex">
      {planets.map((planet) => (
        <Link to={`/people/${planet.uid}`} key={planet.uid}>
          <div className="card-body">
            <div className="card" id="cardplanet">
              <img
                src={planet.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt="..."
                onError={onError}
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">{planet.climate}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardPlanets;
