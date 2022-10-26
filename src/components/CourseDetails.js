import React from "react";
import { FaArrowLeft, FaArrowRight, FaDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  //   console.log(course);
  const { description, id, image, price, title, rating } = course;

  const ref = React.createRef();

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-green-500">
          Course Details
        </h1>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="badge badge-secondary py-3 px-4 items-center mt-3 md:font-bold md:text-xl"
              onClick={toPdf}
            >
              <FaDownload></FaDownload>PDF
            </button>
          )}
        </Pdf>
      </div>
      <hr />
      <div
        ref={ref}
        className="card md:w-6/12 mx-auto bg-base-100 shadow-xl my-8"
      >
        <div className="card-title  justify-center mb-5">
          <h2 className="font-bold text-xl md:text-5xl text-rose-500">
            {title}
          </h2>
        </div>
        <div>
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p className="font-serif text-lg">{description}</p>
            <span className="text-xl font-bold flex items-center text-yellow-500">
              Rating : {rating.rate}
              <FaStar />
            </span>
            <h3 className="text-3xl">Price: ${price}</h3>
            <div className="card-actions justify-end">
              <Link to={`/courses/${id}`}>
                <button className="btn btn-primary">
                  Get premium access<FaArrowRight></FaArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
