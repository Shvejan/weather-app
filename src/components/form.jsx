import React, { Component } from "react";
import "./form.style.css";
const Form = (props) => {
  return (
    <div className="row">
      <form onSubmit={props.getW}>
        <div className="col-md-3">
          <div>{props.error ? "enter proper data" : null}</div>
          <input
            name="city"
            type="text"
            placeholder="Enter City, Ex:- Hyderabad"
          />
        </div>
        <div className="col-md-3">
          <input
            name="country"
            type="text"
            placeholder="Enter Country, Ex:- India"
          />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-warning">
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
