import React from "react";
import { FaArrowLeft, FaArrowRight, FaDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
//   console.log(course);
  const { category, description, id, image, price, title, rating } = course;

  const ref = React.createRef();


  return (
      <div  ref={ref} className="card w-6/12 mx-auto bg-base-100 shadow-xl my-8">
        <div className="card-title  justify-center mb-5">
          <h2 className="font-bold text-5xl text-rose-500">{title}</h2>
          <Pdf targetRef={ref} filename="code-example.pdf">{({ toPdf }) => <button className="badge badge-secondary py-3 px-4 items-center mt-3 font-bold text-xl" onClick={toPdf}><FaDownload></FaDownload> Generate Pdf</button>}</Pdf>
        </div>
      <div>
      <figure>
        <img className="w-9/12" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="font-serif text-lg md:mx-36">{description}</p>
        <span className="text-xl font-bold flex items-center text-yellow-500 md:ml-36">Rating : {rating.rate}<FaStar/></span>
        <h3 className="text-3xl md:ml-36">Price: ${price}</h3>
        <div className="card-actions justify-end">
            <Link to='/courses'><button className="btn btn-primary"><FaArrowLeft></FaArrowLeft>Get premium access</button></Link>
            <button className="btn btn-primary">Get premium access<FaArrowRight></FaArrowRight></button>
        </div>
      </div>
      </div>
    </div>
  );
}; 

export default CourseDetails;
