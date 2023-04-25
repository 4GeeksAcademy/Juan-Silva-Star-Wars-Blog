import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/cardDetails.css";
//esta funcion muestra cada detalle individual en una pagina *no en el home

export const Vehicles = () => {
  const [vehicles, setvehicles] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => setvehicles(data.result.properties))
      .catch((err) => console.error(err));
  }, [id]);
  const onError = (e) => {
    e.target.src = "https://via.placeholder.com/500";
  };

  return (
    <div className="container-fluid  text-center mt-5">
      <div className="card mb-3" id="characterDetails">
        <div className="row g-0">
          <div className="col-4">
          <img
                src={vehicles.image || "https://via.placeholder.com/500"}
                className="card-img-top"
                alt="..."
                onError={onError}
                id="imgDetails"
              />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{vehicles.name}</h5>
              <p className="card-text">
                {" "}
                <p>Cargo capacity: {vehicles.cargo_capacity}</p>
                <p>Consumables: {vehicles.consumables}</p>
                <p>Cost in credits: {vehicles.cost_in_credits}</p>
                <p>Crew: {vehicles.crew}</p>
                <p>Length: {vehicles.length}</p>
                <p>Manufacturer: {vehicles.manufacturer}</p>
                <p>Max atmosphering speed: {vehicles.max_atmosphering_speed}</p>
                <p>Model: {vehicles.model}</p>
                <p>Passengers: {vehicles.passengers}</p>
                <p>Vehicle class: {vehicles.vehicle_class}</p>
{/* {
  ...
  "properties": {
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [ "https://www.swapi.tech/api/films/1/" ],
    "url": "https://www.swapi.tech/api/vehicles/4/",
    "vehicle_class": "wheeled"
  }
} */}

              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
