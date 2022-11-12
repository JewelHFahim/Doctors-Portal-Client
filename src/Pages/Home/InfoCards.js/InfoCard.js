import React from "react";

const InfoCard = ({card}) => {

    const {title, description, icon, bgClass} = card;

  return (
    <div className={`card lg:card-side shadow-xl ${bgClass} p-6 text-white text-center` }>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

      </div>
    </div>
  );


};

export default InfoCard;
