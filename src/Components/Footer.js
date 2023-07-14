import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  const enterMouse = (e) => {
    e.target.style.color = "white";
  };

  const leaveMouse = (e) => {
    e.target.style.color = "blue";
  };

  return (
    <div>
      <footer className=" p-4  bg-dark text-decoration-none text-start fs-4">
        <Link
          to="/faq"
          className="m-4  text-decoration-none"
          onMouseEnter={enterMouse}
          onMouseLeave={leaveMouse}
        >
          FAQ
        </Link>

        <Link
          to="/contact"
          className="m-4  text-decoration-none"
          onMouseEnter={enterMouse}
          onMouseLeave={leaveMouse}
        >
          Contact Us
        </Link>
        <Link
          to="/privacypolicy"
          className="m-4 text-decoration-none"
          onMouseEnter={enterMouse}
          onMouseLeave={leaveMouse}
        >
          Privacy Policy
        </Link>
        <Link
          to="/termsOfUse"
          className="m-4 text-decoration-none"
          onMouseEnter={enterMouse}
          onMouseLeave={leaveMouse}
        >
          Terms of Use
        </Link>

        <b className="m-4  text-decoration-none text-primary">
          &copy; 2022 | Bufon's News
        </b>
      </footer>
      <Outlet />
    </div>
  );
}
