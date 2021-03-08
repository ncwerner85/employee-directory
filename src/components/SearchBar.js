import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
