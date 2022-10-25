import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const {category,description,id,image,price,title,rating} =course;
    return (
        <div>
            <h1>Course Details</h1>
        </div>
    );
};

export default CourseDetails;