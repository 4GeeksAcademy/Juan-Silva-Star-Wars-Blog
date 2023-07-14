import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/cardDetails.css";

export const Planets = () => {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();
  const { actions } = useContext(Context);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => setPlanet(data.result.properties))
      .catch((err) => console.error(err));
  }, [id]);

  const onError = (e) => {
    e.target.src = "https://via.placeholder.com/500";
  };

  const handleAddFavorite = () => {
    actions.addFavorite(person);
  };

  return (
    <div className="container-fluid  text-center mt-5">
      <div className="card mb-3" id="characterDetails">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={planet.image || "https://via.placeholder.com/500"}
              className="card-img-top"
              alt="..."
              onError={onError}
              id="imgDetails"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                {" "}
                <p>Climate: {planet.climate}</p>
                <p>Diameter: {planet.diameter}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Orbital period: {planet.orbital_period}</p>
                <p>Population: {planet.population}</p>
                <p>Rotation period: {planet.rotation_period}</p>
                <p>Surface water: {planet.surface_water}</p>
                <p>Terrain: {planet.terrain}</p>
              </p>

              {/* <button className="btn btn-primary" onClick={handleAddFavorite}>
                <i className="fa-regular fa-star"></i> Agregar a favoritos
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
