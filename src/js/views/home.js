import React from "react";
import CardCharacter from "./cardCharacter";
import CardPlanets from "./cardPlanets";
import CardVehicles from "./cardVehicles";

export const Home = () => (
  <div className="container-fluid p-6 m-6">
    <div className="row gy-5">
      <div className="col-12">
        <div className="p-2 border bg-light">
          <h2>Characters</h2>
          <CardCharacter></CardCharacter>
        </div>
      </div>
      <div className="col-12">
        <div className="p-2 border bg-light">
          <h2>Planets</h2>
          <CardPlanets></CardPlanets>
        </div>
      </div>
      <div className="col-12">
        <div className="p-2 border bg-light">
          <h2>Vehicles</h2>
          <CardVehicles></CardVehicles>
        </div>
      </div>
    </div>
  </div>
);
