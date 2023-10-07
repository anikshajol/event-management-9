import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <li className="">
        <NavLink
          className={({ isActive }) => (isActive ? "active-grad" : "")}
          to={"/home"}
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) => (isActive ? "active-grad" : "")}
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-grad" : "")}
          to={"/events"}
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active-grad" : "")}
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="w-16">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center gap-8">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user && <Link className="user-name">{user.displayName}</Link>}

          {!user ? (
            <Link to={"/login"} className="nav-btn">
              Login
            </Link>
          ) : (
            <Link onClick={handleLogOut} className="nav-btn">
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
