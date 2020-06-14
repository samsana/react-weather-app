import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="input-group mb-3 Form">
      <input
        type="search"
        className="form-control"
        placeholder="Where to, Miss?"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}
