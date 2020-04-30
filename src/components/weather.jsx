import React from "react";
const Weather = (props) => {
  return (
    <div className="container text-light">
      <div>
        <h1>
          {props.data.city},{props.data.country}
        </h1>
        <h5 className="py-4">
          <i className={props.data.icon}></i>
        </h5>
        <h1 className="py-2">{props.data.celsius}&deg;</h1>
        {minmax(props.data.tmin, props.data.tmax)}
        <h4 className="py-3">{props.data.desc}</h4>
      </div>
    </div>
  );
};

function minmax(min, max) {
  return (
    <h3>
      <span className="px-4">{max}&deg;</span>
      <span className="px-4">{min}&deg;</span>
    </h3>
  );
}
export default Weather;
