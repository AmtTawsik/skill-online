import React from "react";
import bg from '../assets/bg.jpg'

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-extrabold font-serif text-white">SKILL-ONLINE</h1>
          <p className="mb-5">
            Skill online is one of the most populer website for learn online. You can easyly purches Any kind of skill courses from our website.
            just click the button and start a new jaurny of learning with us.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
