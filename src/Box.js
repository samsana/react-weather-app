import React from "react";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import "./Box.css";

export default function Box() {
  return (
    <div className="Box">
      <div className="form-group">
        <form>
          <label for="exampleInputEmail1">React App</label>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Where to, Miss?"
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
      <Weather />
    </div>
  );
}
