import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section id="about" className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="lg:w-1/2 h-full flex items-center justify-center">
            <img
              src="http://localhost/portfolio/pictures/LOGO.png"
              alt="Project Logo"
              className="w-100 h-100 rounded-full flex-shrink-0"
            />
          </div>
          <div className="lg:w-1/2 lg:h-full bg-cover bg-center p-8">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                <span
                  style={{ backgroundColor: "#5CE1E6" }}
                  className="text-transparent bg-clip-text"
                >
                  About Our Project
                </span>
              </h2>
              <p className="mb-4 text-lg font-poppins">
                Explore our journey from day one till now. Our portfolio is a
                simple yet powerful showcase of what we've accomplished so far –
                a narrative of progress, collaboration, and the impactful
                projects that define our journey.
              </p>
              <div className="mb-6 relative">
                <div
                  className="border-t-2 absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(16, 185, 129, 0), rgba(16, 185, 129, 1), rgba(16, 185, 129, 0))",
                  }}
                ></div>
              </div>

              <p className="mb-6 font-bold"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
