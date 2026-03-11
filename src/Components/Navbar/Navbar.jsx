import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthConText } from "../../Context/AuthConText";

const Navbar = () => {
  const { user, signOutUser } = use(AuthConText);

  const handleSignOutUser = () => {
    signOutUser()
      .then((result) => console.log("Signed out:", result.user))
      .catch((error) => console.log(error.message));
  };

  const MenuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `LatoSemibold text-lg px-3 py-1 rounded ${
              isActive
                ? "bg-primary text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-Jobs"
          className={({ isActive }) =>
            `LatoSemibold text-lg px-3 py-1 rounded ${
              isActive
                ? "bg-primary text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`
          }
        >
          All Jobs
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-a-job"
              className={({ isActive }) =>
                `LatoSemibold text-lg px-3 py-1 rounded ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-800 hover:bg-gray-200"
                }`
              }
            >
              Add a Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-accepted-tasks"
              className={({ isActive }) =>
                `LatoSemibold text-lg px-3 py-1 rounded ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-800 hover:bg-gray-200"
                }`
              }
            >
              My Accepted Tasks
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold LatoBold text-primary">
              SkillNext
            </Link>
            {/* Mobile dropdown */}
            <div className="lg:hidden ml-4">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost p-2">
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
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact list-none dropdown-content mt-2 p-2 shadow bg-white rounded-box w-52"
                >
                  {MenuLinks}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-4">
            <ul className="flex list-none gap-2">{MenuLinks}</ul>
          </div>

          {/* Auth Buttons */}
          <div>
            {user ? (
              <button
                onClick={handleSignOutUser}
                className="btn btn-outline btn-primary LatoSemibold text-lg"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline btn-primary LatoSemibold text-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;