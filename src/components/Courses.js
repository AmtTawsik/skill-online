import React from "react";
import '../App.css'
import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import { Link } from "react-router-dom";

// Here is All Courses.
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`https://skill-online-server.vercel.app/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:grid container my-4 w-11/12 mx-auto courses">
      
      <div className="">
        <h1 className="text-center font-extrabold text-4xl mb-2 font-serif text-teal-500">Category</h1>
        <hr />
        <br />
        {
            courses.map(course => <Link to={`/course/${course.id}`} key={course.id}><button className="text-center mx-auto bg-green-500 hover:bg-green-700 font-serif md:font-bold md:text-2xl w-full py-2 px-5 mb-1 md:mb-3 rounded-lg">{course.category}</button><br/></Link>)
        }
      </div>
      

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
