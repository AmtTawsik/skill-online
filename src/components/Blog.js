import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center mt-6 text-5xl font-extrabold text-green-600'>Blogs</h1>
            <hr />
            <div>
                <div className='bg-teal-300 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-extrabold'>Blog-1</h1>
                    <h5 className='text-xl text-cyan-800 font-bold'>What is cors?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated.This policy is used to secure a certain web server from access by other website or domain. For example, only the allowed domains will be able to access hosted files in a server such as a stylesheet, image, or a script.For example, while you are still in the development stage - if you are using a frontend library such as React, your front end application will be served on http://localhost:3000. Meanwhile, your Express server might be running on a different port such as http://localhost:2020. Because of this, we'll need to allow CORS between those servers.</p>
                </div>

                <div className='bg-teal-300 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-extrabold'>Blog-2</h1>
                    <h5 className='text-xl text-cyan-800 font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Accelerate Development. Backed by Google. Build Fast For Any Device. <br />Other Options:
                    Auth0, Mongo DB, Passport, Okta, JSON Web Token, Keycloak, Amazon Cognito Etc.</p>
                </div>

                <div className='bg-teal-300 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-extrabold'>Blog-3</h1> 
                    <h5 className='text-xl text-cyan-800 font-bold'>How does the private route work?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>

                <div className='bg-teal-300 p-10 m-10 rounded-lg'>
                    <h1 className='text-2xl text-amber-600 font-extrabold'>Blog-4</h1> 
                    <h5 className='text-xl text-cyan-800 font-bold'>What is Node? How does Node work?</h5>
                    <p className='font-mono font-bold text-fuchsia-800'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. <br/>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;