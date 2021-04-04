import React from "react";

const HomeButton = ({ href, name }) => {
  return (
    <a href={href} alt={name}>
      <button className="button__standard border__accent__2">{name}</button>
    </a>
  );
};

export default HomeButton;
