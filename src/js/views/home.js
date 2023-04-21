import React from "react";
import CardCharacter from "./cardCharacter";
import CardPlanets from "./planets";
import CardVehicles from "./vehicles";

export const Home = () => (
  <div className="container-fluid p-6 m-6">
    <div className="row gy-5">
      <div className="col-12">
        <div className="p-2 border bg-light">
          <h2>Personajes</h2>
          <CardCharacter></CardCharacter>
        </div>
      </div>
      <div className="col-12">
        <div className="p-2 border bg-light">
          <h2>Planetas</h2>
          <CardPlanets></CardPlanets>
        </div>
      </div>
      <div className="col-12">
        <div className="p-2 border bg-light">
          <h2>Vehiculos</h2>
          <CardVehicles></CardVehicles>
        </div>
      </div>
    </div>
  </div>
);
