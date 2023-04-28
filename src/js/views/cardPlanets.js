import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function CardPlanets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets?page=1&limit=1000")
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
        <Link to={`/planets/${planet.uid}`} key={planet.uid}>
          <div className="card-body">
            <div className="card" id="cardplanet">
              <img
                src={planet.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt="..."
                onError={onError}
              />
              <div className="card-body d-flex">
              <div className="card-title">
                  <h6>{planet.name}</h6>
                </div>
                <div className="card-bottom">
                  <button className="btn btn-primary">
                    <i class="fa-regular fa-star"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardPlanets;
