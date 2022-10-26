import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const PremiumAccess = () => {
  const {user} = useContext(AuthContext)
  const course = useLoaderData();
  console.log(course);
  const { description,image, price, title, rating } = course;

  const handelByeNow = (event) =>{
    event.preventDefault();
    const form = event.target;
    form.reset();
    toast.success(`Congratulations! You have get the Access of ${title} course!`)
  }

  return (
    <>
      <h1 className="text-3xl md:text-7xl font-bold text-green-400 text-center">Checkout</h1>
      <hr />
      <form onSubmit={handelByeNow} className="card card-compact bg-base-100 shadow-xl md:w-2/6 mx-auto my-7">
      <figure>
        <img className="w-11/12" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-lg">Already Perched : {rating.count} People</p>
        <p className="text-lg flex items-center">Rating : {rating.rate} <FaStar></FaStar></p>
        <h3 className="text-3xl font-bold">Price: ${price}</h3>
        <label htmlFor="amt">
          <p className="text-lg">Enter Your Name:</p>
        <input defaultValue={user?.displayName} name="name" type="text" placeholder="Your Full Name" className="input input-bordered input-accent w-full max-w-xs" required/>
        </label>
        
        <input name="address" type="text" placeholder="Your Full Address" className="input input-bordered input-accent w-full max-w-xs" required/>
        <input name="phone" type="text" placeholder="Your Phone Number to Confirm" className="input input-bordered input-accent w-full max-w-xs" required/>
        <h3 className="text-lg">Give a Reating For Our Service:</h3>
        <div className="rating rating-lg rating-half mx-auto">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        </div>
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default PremiumAccess;
