import React from "react";

const Service = ({ service }) => {
  const { title, img, description } = service;

  return (
      <div className="card bg-base-100 shadow-xl mt-8">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
  );
};

export default Service;
