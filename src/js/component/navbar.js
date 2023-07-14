import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRemoveFavorite = (person) => {
    actions.removeFavorite(person);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3 p-4">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 p-3">Star Wars</span>
      </Link>
      <div className="ml-auto">
        <div className={`dropdown ${dropdownOpen ? "show" : ""}`}>
          <button
            className="btn btn-info rounded-pill dropdown-toggle"
            type="button"
            onClick={toggleDropdown}
          >
            Favoritos ({store.favorites.length})
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            {store.favorites.length === 0 ? (
              <p className="dropdown-item-text">No hay favoritos</p>
            ) : (
              store.favorites.map((person) => (
                <div key={person.uid}>
                  <p className="dropdown-item mb-0">
                    {person.name}
                    <button
                      className="btn btn-link btn-sm text-danger"
                      onClick={() => handleRemoveFavorite(person)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </p>
                  <div className="dropdown-divider"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
