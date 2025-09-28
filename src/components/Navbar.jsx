import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const adminUrl = import.meta.env.VITE_ADMIN_URL;

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className=" flex items-center justify-between text-sm py-4 mb-5 border-2 border-solid ">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400 w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr
            className="border-none outline-none h-0.5 bg-sky-400  w-3/5 m-auto hidden"
            hidden
          />
        </NavLink>

        <NavLink to="about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400  w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400  w-3/5 m-auto hidden" />
        </NavLink>
        <a className="border-2 bg-gray-300 hover:bg-gray-500 px-3 py-2 mx-3 rounded-lg" href='https://doctors-admin-panel.vercel.app'>Admin Panel</a>
      </ul>

      <div className="flex items-center ">
        {token && userData ? (
          <div className=" flex items-center gap-2 cursor-pointer mr-3">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <div className="relative group">
              <img className="w-2.5" src={assets.dropdown_icon} />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4">
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => navigate("/my-profile")}
                  >
                    My Profile
                  </p>
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => navigate("/my-appointments")}
                  >
                    My Appointment
                  </p>
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => logout()}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-cyan-500 text-white px-8 py-3 rounded-full md:block"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/* ----------- Mobile Menu ------------ */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="W-36" src={assets.logo} alt="" />
            <img
              className="w-5"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
