import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-3">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="realtor logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <nav>
          <ul className="flex items-center space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer border-b-[3px] py-3 text-sm font-semibold ${pathMatchRoute("/") ? "border-b-red-500 text-black" : "border-b-transparent text-gray-400"}`}
            >
              Home
            </li>

            <li
              onClick={() => navigate("/offers")}
              className={`cursor-pointer border-b-[3px] py-3 text-sm font-semibold ${pathMatchRoute("/offers") ? "border-b-red-500 text-black" : "border-b-transparent text-gray-400"}`}
            >
              Offers{" "}
            </li>
            <li
              onClick={() => navigate("/sign-in")}
              className={`cursor-pointer border-b-[3px] py-3 text-sm font-semibold ${pathMatchRoute("/sign-in") ? "border-b-red-500 text-black" : "border-b-transparent text-gray-400"}`}
            >
              Sign in{" "}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
