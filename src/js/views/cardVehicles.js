import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

function CardVehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((res) => res.json())
      .then((data) => setVehicles(data.results))
      .catch((err) => console.error(err));
  }, []);

  const onError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <div className="container-fluid overflow-scroll d-flex ">
      {vehicles.map((vehicle) => (
        <Link to={`/vehicles/${vehicle.uid}`}>
          <div key={vehicle.uid} className="card-body">
            <div className="card" id="cardvehicle">
              <img
                src={vehicle.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt="..."
                onError={onError}
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">{vehicle.model}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardVehicles;
