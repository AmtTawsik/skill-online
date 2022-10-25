import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
            <h1>Course Details</h1>
        </div>
    );
};

export default CourseDetails;