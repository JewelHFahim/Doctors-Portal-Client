import React from "react";
import people1 from "../../../Assets/images/people1.png";
import people2 from "../../../Assets/images/people2.png";
import people3 from "../../../Assets/images/people3.png";
import Review from "./Review";
import quate from "../../../Assets/icons/quote.svg";

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-bold text-primary">Testimonial</p>
          <h1 className="text-4xl ">What Our Patients Says</h1>
        </div>
        <img className=" w-24 lg:w-40" src={quate} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {reviewData.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
