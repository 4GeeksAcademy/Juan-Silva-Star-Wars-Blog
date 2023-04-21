import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardComponent() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div  className="container overflow-scroll d-flex">
      {people.map((person) => (
        <Link to={`/people/${person.uid}`}>
          <div key={person.uid} className="card-body efecto">
            <div className="card h-100">
              <img src={person.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">{person.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardComponent;

