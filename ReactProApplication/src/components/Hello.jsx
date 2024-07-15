import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>
        {props.name} {props.age} {props.isMarried}
      </h1>
    </div>
  );
};

export default Hello;
