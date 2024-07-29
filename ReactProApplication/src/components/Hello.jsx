import React from "react";

const Hello = ({ person }) => {
  return (
    <div>
      <h1>
        {person.name} {person.title} {person.Message} 😍
      </h1>
    </div>
  );
};

export default Hello;
