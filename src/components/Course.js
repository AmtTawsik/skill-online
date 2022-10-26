import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  // console.log(course)
  const { category, image, title, id } = course;
  return (
    <div className="card card-compact w-100 bg-base-100 shadow-xl">
      <figure>
        <img style={{ height: "180px" }} src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-fuchsia-600">{title}</h2>
        <p className="font-bold">This course is from {category} Category</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${category}`}>
            <button className="btn btn-primary">Course Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
