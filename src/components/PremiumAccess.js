import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';

const PremiumAccess = () => {

  const course = useLoaderData();
  console.log(course);
  const { description,image, price, title, rating } = course;

  const handelByeNow = () =>{
    toast.success(`Congratulations! You have get the Access of ${title} course!`)
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl md:w-2/6 mx-auto my-7">
      <figure>
        <img className="w-11/12" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="">{description}</p>
        <p className="text-lg">Already Perched : {rating.count} People</p>
        <p className="text-lg flex items-center">Rating : {rating.rate} <FaStar></FaStar></p>
        <h3 className="text-3xl font-bold">Price: ${price}</h3>
        <div className="card-actions justify-end">
          <button onClick={handelByeNow} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccess;
