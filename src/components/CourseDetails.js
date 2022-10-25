import React from "react";
import { FaArrowRight, FaDownload, FaFilePdf, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
//   console.log(course);
  const { category, description, id, image, price, title, rating } = course;
  return (
    <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-title  justify-center mb-5">
          <h2 className="font-bold text-5xl text-rose-500">{title}</h2>
          <button className="badge badge-secondary py-3 px-4 items-center mt-3 font-bold text-xl">PDF<FaDownload></FaDownload></button>
        </div>
      <figure>
        <img className="w-9/12" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="font-serif text-lg md:mx-36">{description}</p>
        <span className="text-xl font-bold flex items-center text-yellow-500 md:ml-36">Rating : {rating.rate}<FaStar/></span>
        <h3 className="text-3xl md:ml-36">Price: ${price}</h3>
        <div className="card-actions justify-end">
            <button className="btn btn-primary md:mr-36">Get premium access<FaArrowRight></FaArrowRight></button>
        </div>
      </div>
    </div>
  );
}; 

export default CourseDetails;
