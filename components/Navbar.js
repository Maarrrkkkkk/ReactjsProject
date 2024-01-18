import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
          <img
            src="http://localhost/portfolio/pictures/HEADERS.png"
            alt="Project Logo"
            width="350"
          />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/members" className="mr-5 hover-text-custom-blue text-lg">
            Members
          </Link>
          <Link to="/projects" className="mr-5 hover-text-custom-blue text-lg">
            About Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
