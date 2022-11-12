import React from "react";

const Review = ({ review }) => {
  const { name, location, img, description } = review;

  return (
    <section className="">

      <div className="card shadow-xl p-5">

        <div className="card-body">

          <p>{description}</p>
          <div className="flex items-center mt-5">
          <div className="avatar justify-center mr-4">
          <div className=" w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
        <h2 className="card-title justify-center mt-2">{name}</h2>
        <p className="text-center">{location}</p>
        </div>
          </div>

        </div>
        
      </div>

    </section>
  );
};

export default Review;
