import React from "react";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import News from "./News";

// export default function Navbar() {
//   const [category, setCategory] = useState("general");
//   const [title, setTitle] = useState("General");

//   const enterMouse = (e) => {
//     e.target.style.backgroundColor = "grey";
//   };

//   const leaveMouse = (e) => {
//     e.target.style.backgroundColor = "white";
//   };

//   const navButtonEnterMouse = (e) => {
//     e.target.style.color = "white";
//   };

//   const navButtonLeaveMouse = (e) => {
//     e.target.style.color = "black";
//   };
//   const apiKey = process.env.REACT_APP_NEWS_API;

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg text-white bg-secondary sticky-top">
//            <div className="container-fluid">
//              <Link className="navbar-brand  fs-4  fst-italic fw-bold" to="/"
//              onMouseEnter= {navButtonEnterMouse}
//              onMouseLeave= {navButtonLeaveMouse}
//              >
//                BUFON's News
//              </Link>
//              <button
//                className="navbar-toggler"
//                type="button"
//                data-bs-toggle="collapse"
//                data-bs-target="#navbarTogglerDemo01"
//                aria-controls="navbarTogglerDemo01"
//                aria-expanded="false"
//                aria-label="Toggle navigation"
//              >
//                <span className="navbar-toggler-icon"></span>
//              </button>
//              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                  <li className="nav-item">
//                    <Link
//                      className="nav-link active fs-4"
//                      aria-current="page"
//                      to="/"
//                      onMouseEnter= {navButtonEnterMouse}
//                      onMouseLeave= {navButtonLeaveMouse}
//                    >
//                      Home
//                    </Link>
//                  </li>
//                  <li className="nav-item">
//                    <Link className="nav-link fs-4  " to="about"
//                    onMouseEnter= {navButtonEnterMouse}
//                    onMouseLeave= {navButtonLeaveMouse}
//                     >
//                      About
//                    </Link>
//                  </li>
//                  <div className="dropdown">
//                    <button
//                      className="btn btn-secondary dropdown-toggle fs-4"
//                      type="button"
//                      data-bs-toggle="dropdown"
//                      aria-expanded="false"
//                    >
//                      Categories
//                    </button>
//                    <ul className="dropdown-menu ">
//                      <li>
//                        <Link
//                          className="dropdown-item"
//                          to="/"
//                          onMouseEnter={enterMouse}
//                          onMouseLeave={leaveMouse}
//                          onClick={() => {
//                           setCategory("business");
//                           setTitle("Business");
//                         }}

//                        >
//                          Business
//                        </Link>
//                      </li>
//                      <li>
//                        <Link
//                          className="dropdown-item"
//                          to="/"
//                          onMouseEnter={enterMouse}
//                          onMouseLeave={leaveMouse}
//                          onClick={() => {
//                           setCategory("entertainment");
//                           setTitle("Entertainment");

//                         }}

//                        >
//                          Entertainment
//                        </Link>
//                      </li>
//                      <li>
//                        <Link
//                          className="dropdown-item"
//                          to="/"
//                          onMouseEnter={enterMouse}
//                          onMouseLeave={leaveMouse}
//                          onClick={() => {
//                           setCategory("health");
//                           setTitle("Health");
//                         }}

//                        >
//                          Health
//                        </Link>
//                      </li>
//                      <li>
//                        <Link
//                          className="dropdown-item"
//                          to="/"
//                          onMouseEnter={enterMouse}
//                          onMouseLeave={leaveMouse}
//                          onClick={() => {
//                           setCategory("science");
//                           setTitle("Science");
//                         }}

//                        >
//                          Science
//                        </Link>
//                      </li>
//                      <li>
//                        <Link
//                          className="dropdown-item"
//                          to="/"
//                          onMouseEnter={enterMouse}
//                          onMouseLeave={leaveMouse}
//                          onClick={() => {
//                           setCategory("sports");
//                           setTitle("Sports");
//                         }}
//                        >
//                          Sports
//                        </Link>
//                      </li>
//                      <li>
//                        <Link
//                          className="dropdown-item"
//                          to="/"
//                          onMouseEnter={enterMouse}
//                          onMouseLeave={leaveMouse}
//                          onClick={() =>{
//                           setCategory("technology");
//                           setTitle("Technology");
//                          }
//                          }
//                        >
//                          Technology
//                        </Link>
//                      </li>
//                    </ul>
//                  </div>
//                </ul>
//              </div>
//            </div>
//          </nav>
//          <Outlet />
//          <Routes>
//            <Route
//              path="/"
//              element={
//                <News apiKey={apiKey}  category={category} key={category} title = {title} />
//              }
//            />
//          </Routes>
//        </>
//   );
// }

export default function Navbar() {
  const [category, setCategory] = useState("general");
  const [title, setTitle] = useState("General");

  const enterMouse = (e) => {
    e.target.style.backgroundColor = "grey";
  };
  const leaveMouse = (e) => {
    e.target.style.backgroundColor = "white";
  };
  const navButtonEnterMouse = (e) => {
    e.target.style.color = "white";
  };
  const navButtonLeaveMouse = (e) => {
    e.target.style.color = "black";
  };

  const handleClickBusiness = () => {
    setCategory("business");
    setTitle("Business");
  };
  const handleClickHealth = () => {
    setCategory("health");
    setTitle("Health");
  };
  const handleClickSports = () => {
    setCategory("sports");
    setTitle("Sports");
  };
  const handleClickTechnology = () => {
    setCategory("technology");
    setTitle("Technology");
  };
  const handleClickEntertainment = () => {
    setCategory("entertainment");
    setTitle("Entertainment");
  };
  const handleClickScience = () => {
    setCategory("science");
    setTitle("Science");
  };
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <nav className="navbar navbar-expand-lg text-white bg-secondary sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand  fs-4  fst-italic fw-bold"
            to="/"
            onMouseEnter={navButtonEnterMouse}
            onMouseLeave={navButtonLeaveMouse}
          >
            BUFON's News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-4"
                  aria-current="page"
                  to="/"
                  onMouseEnter={navButtonEnterMouse}
                  onMouseLeave={navButtonLeaveMouse}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-4  "
                  to="about"
                  onMouseEnter={navButtonEnterMouse}
                  onMouseLeave={navButtonLeaveMouse}
                >
                  About
                </Link>
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle fs-4"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu ">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onMouseEnter={enterMouse}
                      onMouseLeave={leaveMouse}
                      onClick={handleClickBusiness}
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onMouseEnter={enterMouse}
                      onMouseLeave={leaveMouse}
                      onClick={handleClickEntertainment}
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onMouseEnter={enterMouse}
                      onMouseLeave={leaveMouse}
                      onClick={handleClickHealth}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onMouseEnter={enterMouse}
                      onMouseLeave={leaveMouse}
                      onClick={handleClickScience}
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onMouseEnter={enterMouse}
                      onMouseLeave={leaveMouse}
                      onClick={handleClickSports}
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onMouseEnter={enterMouse}
                      onMouseLeave={leaveMouse}
                      onClick={handleClickTechnology}
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apiKey}
              category={category}
              key={category}
              title={title}
            />
          }
        />
      </Routes>
    </>
  );
}
