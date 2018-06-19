import React from "react";

const Person = props => {
  return (
    <div>
      {props.name ? <h3>My Name is {props.name}</h3> : ""}
      {props.age ? <p>My Age is {props.age}</p> : ""}
    </div>
  );
};

export default Person;
