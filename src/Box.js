import React from "react";
import Weather from "./Weather";
import Table from "./Table";

import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";

export default function Box() {
  return (
    <div className="Box">
      <Table />
      <div className="form-group">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Where to, Miss?"
              />
              <label>
                ...To the{" "}
                <span role="img" aria-label="react">
                  🌟🌟🌟
                </span>
              </label>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
      <Weather />
      <footer>
        React App{" "}
        <span role="img" aria-label="react">
          ⚛️
        </span>
      </footer>
    </div>
  );
}
