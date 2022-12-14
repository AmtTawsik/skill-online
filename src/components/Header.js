import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";


const Header = () => {
  const [state, setState] = useState(false);

  // const [dark,setDark] = useState('light')
  const isChecked = () =>{
    if(dark === 'light'){
      setDark('dark')
    }
    else{
      setDark('light')
    }
    
  }

  // Navigations are here
  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Courses", path: "/courses" },
    { title: "Blog", path: "/blog" },
    { title: "FAQ", path: "/faq" },
  ];

  // use of useContext
  const { user, logOut,dark,setDark } = useContext(AuthContext);

  // LogOut function
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav id={dark} className="bg-teal-100 w-full border-b md:border-0 md:static">
      <div className="items-center px-4  mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <h1 className="font-extrabold text-4xl font-serif text-emerald-600 flex items-center">
              <img style={{ width: "80px" }} src={logo} alt="" />
              <span>Skill Online</span>
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          {/* navBar items are here */}
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-4 md:space-y-0 mr-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <NavLink
                    className="px-5 py-2 rounded-lg text-xl font-bold text-gray-800 hover:text-gray-50 hover:bg-emerald-500"
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}

            {user?.uid ? (
              <>
                <li>
                  <div
                    className="avatar tooltip md:tooltip-bottom tooltip-right tooltip-secondary"
                    data-tip={user.displayName ? user.displayName : "User"}
                  >
                    {/* Profile Image is Here */}
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {user.photoURL ? (
                        <img alt="dp" src={user.photoURL} />
                      ) : (
                        <img
                          alt="dp"
                          src="https://placeimg.com/192/192/people"
                        />
                      )}
                    </div>
                  </div>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 rounded-lg text-xl font-bold text-gray-800 hover:text-gray-50 hover:bg-emerald-500"
                  >
                    <FaSignOutAlt></FaSignOutAlt>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">
                  <button className="px-5 py-2 rounded-lg text-xl font-bold text-gray-800 hover:text-gray-50 hover:bg-emerald-500">
                    Login
                  </button>
                </Link>
              </li>
            )}

            <li>
              <label className="swap swap-rotate">
                <input onClick={isChecked} type="checkbox" />

                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
