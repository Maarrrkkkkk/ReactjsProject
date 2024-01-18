import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="about" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen bg-gray-900">
        {" "}
        <div className="flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, We are{" "}
              <span
                style={{ backgroundColor: "#5CE1E6" }}
                className="text-transparent bg-clip-text"
              >
                Group 1
              </span>
              <br className="hidden lg:inline-block" />
              Welcome to our Portfolio Website
            </h1>

            <p className="mb-8 leading-relaxed text-white">
              Reflecting our proficiency in ReactJS, our final project
              epitomizes our commitment to excellence. Through innovative
              approaches and meticulous craftsmanship, we've pushed the
              boundaries, ensuring an exceptional outcome that showcases our
              mastery in this technology.
            </p>
            <div className="flex justify-center">
              <Link
                to="/members"
                style={{ backgroundColor: "#5CE1E6" }}
                className="inline-flex text-black border-0 py-2 px-6 focus:outline-none rounded text-lg"
              >
                Members
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
        <footer className="bg-gray-900 text-white py-8 text-center">
          <div className="footer-content">
            <h1 className="text-2xl font-bold">
              <span>© 2023 BSIT-3F | All Rights Reserved</span>
            </h1>
            <hr className="line animate-lineFlowLeft animate-lineFlowRight" />

            <br />
            <ul className="socials flex justify-center space-x-4">
              <a target="_blank" href="#" className="text-white text-3xl">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="text-white text-3xl">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="#" className="text-white text-3xl">
                <i className="fab fa-twitter-square"></i>
              </a>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
