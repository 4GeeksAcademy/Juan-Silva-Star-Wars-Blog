import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/cardDetails.css";
export const Character = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.result.properties))
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
                src={person.image || "https://via.placeholder.com/500"}
                className="card-img-top"
                alt="..."
                onError={onError}
                id="imgDetails"
              />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">
                {" "}
                <p>Birth year: {person.birth_year}</p>
                <p>Eye color: {person.eye_color}</p>
                <p>Gender: {person.gender}</p>
                <p>Hair color: {person.hair_color}</p>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Skin color: {person.skin_color}</p>
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
