import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
//Esta funcion son las cards que se muestran en home
function CardCharacter() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((err) => console.error(err));
  }, []);
  const onError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <div className="container-fluid overflow-scroll d-flex ">
      {people.map((person) => (
        <Link to={`/people/${person.uid}`}>
          <div key={person.uid} className="card-body">
            <div className="card" id="cardperson">
              <img
                src={person.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt="..."
                onError={onError}
              />{" "}
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                {/* <p className="card-text">{person.description}</p> */}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardCharacter;
