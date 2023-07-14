import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

function CardPlanets() {
  const [planets, setPlanets] = useState([]);
  const { actions } = useContext(Context);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets?page=1&limit=1000")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.error(err));
  }, []);

  const onError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  const handleAddFavorite = (planet) => {
    actions.addFavorite(planet); // Llamar a la acción addFavorite del contexto
  };


  return (
    <div className="container-fluid overflow-scroll d-flex ">
      {planets.map((planet) => (
        <div>
          <div className="card-body">
            <div className="card" id="cardperson">
              <img
                src={planet.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt="..."
                onError={onError}
              />
              <div className="p-2">
                <div className="card-title mb-1 p-1">
                  <h5>{planet.name}</h5>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <Link to={`/planets/${planet.uid}`} key={planet.uid}>
                    <button
                      className="btn btn-info rounded-pill"
                    >
                      learn more
                    </button>
                  </Link>
                  <button
                    className="btn btn-warning "
                    onClick={() => handleAddFavorite(planet)}
                  >
                    <i className="fa-regular fa-star"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPlanets;
