import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import FaQ from "../components/FaQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";

// All routes are here

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/home',
                element:<Home></Home>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/faq',
                element:<FaQ></FaQ>,
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
            },
            {
                path:'/course/:id',
                loader:({params})=>fetch(`https://skill-online-server.vercel.app/courses/${params.id}`),
                element:<CourseDetails></CourseDetails>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
        ]
    }
])