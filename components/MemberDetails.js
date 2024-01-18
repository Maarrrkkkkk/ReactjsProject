import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BadgeCheckIcon } from "@heroicons/react/solid";

function MemberDetail() {
  const { id } = useParams();
  const [memberDetails, setMemberDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAboutText, setEditedAboutText] = useState("");
  const [membersData, setMembersData] = useState([]);
  const [imagesById, setImagesById] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost/getMembers.php")
      .then((response) => response.json())
      .then((data) => setMembersData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost/getMemberDetails.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMemberDetails(data);
        setEditedAboutText(data.about);
      })
      .catch((error) => console.error("Error fetching member details:", error));
  }, [id]);

  const [fetchedMembersData, setFetchedMembersData] = useState([]);

  useEffect(() => {
    const fetchMemberData = async () => {
      const data = [
        {
          id: 1,
          skills: ["Html"],
        },
        {
          id: 1,
          skills: ["Css"],
        },
        {
          id: 1,
          skills: ["Javascript"],
        },
        {
          id: 1,
          skills: ["Php"],
        },

        // Add more member objects here
      ];
      setFetchedMembersData(data);
    };

    fetchMemberData();
  }, []);

  const handleEditAboutText = () => {
    setIsEditing(true);
  };

  const handleSaveAboutText = () => {
    fetch("http://localhost/updateAbout.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: memberDetails.id,
        about: editedAboutText,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Member's About Me updated successfully") {
          setMemberDetails((prevState) => ({
            ...prevState,
            about: editedAboutText,
          }));
          setIsEditing(false);
        } else {
          console.error("Error updating About Me:", data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const [activeIndex, setActiveIndex] = useState(0); // State to track active image index

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + 3) % 3; // Assuming 6 images, ensuring positive index
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % 3; // Assuming 6 images, cycling back to 0
    setActiveIndex(newIndex);
  };

  // Function to handle image click
  const [isZoomed] = useState(false);

  function generateImageUrls(lastName, numImages) {
    const urls = [];
    for (let i = 1; i <= numImages; i++) {
      const timestamp = Date.now();
      urls.push(
        `http://localhost/portfolio/pictures/${lastName}${i}.png?${timestamp}`
      );
    }
    return urls;
  }

  useEffect(() => {
    const newImagesById = {};
    membersData.forEach((member) => {
      newImagesById[member.id] = generateImageUrls(member.lastName, 3); // Assuming each member has 3 images
    });
    setImagesById(newImagesById);
  }, [membersData]);

  return (
    <div className="h-screen pb-20 grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-black-500">
      {memberDetails ? (
        <React.Fragment>
          <div className="rounded-lg overflow-hidden col-span-1 row-span-1 flex items-center justify-center">
            {/* Profile image */}
            <img
              src={memberDetails.imageUrl}
              alt={`Member ${id}`}
              className="w-64 h-64 rounded-full object-cover shadow-green mb-9"
            />
          </div>
          <div className="p-4">
            <div className="rounded-lg overflow-hidden col-span-1 row-span-1">
              {/* Skills section */}
              <div className="mt-10 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div>
                  <h2 className="text-2xl font-bold text-white text-left mb-8">
                    Skills
                  </h2>
                </div>
                <div className="flex flex-wrap">
                  {fetchedMembersData.map((member) => (
                    <div key={member.id} className="p-2 sm:w-1/2 w-full">
                      <div className="bg-gray-800 rounded p-4 h-full">
                        {member.skills.map((skill, index) => (
                          <div key={index} className="flex items-center mb-2">
                            <BadgeCheckIcon className="text-custom-blue w-6 h-6 flex-shrink-0 mr-2" />
                            <span className="title-font font-medium text-white">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen pb-20 grid grid-cols-1 grid-rows-2 gap-1 overflow-hidden bg-black-500">
            {memberDetails ? (
              <React.Fragment>
                {/* Other sections */}
                <div className="rounded-lg overflow-hidden col-span-1 row-span-1">
                  {/* Member information */}
                  <div className="p-4 text-center ">
                    <h1 className="text-2xl font-medium mb-2 text-white text-center">
                      About Me {memberDetails.name}
                    </h1>
                    {isEditing ? (
                      <div>
                        <textarea
                          value={editedAboutText}
                          onChange={(e) => setEditedAboutText(e.target.value)}
                          className="w-full p-2 mb-4"
                          rows={4}
                        />
                        <button
                          onClick={handleSaveAboutText}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <React.Fragment>
                        <p className="w-full text-center">
                          {memberDetails.about}
                        </p>{" "}
                        {/* Display the "About Me" information */}
                        <div className="flex justify-center">
                          <button
                            onClick={handleEditAboutText}
                            className="bg-custom-blue text-black font-bold py-2 px-4 rounded mt-4 flex items-center"
                          >
                            Edit Bio
                          </button>
                        </div>
                        <br></br>
                        <div className="flex justify-center items-center mt-4">
                          {/* Facebook Icon */}
                          <i className="fab fa-facebook-square text-white text-4xl mx-4"></i>
                          {/* Twitter Icon */}
                          <i className="fab fa-twitter-square text-white text-4xl mx-4"></i>
                          {/* GitHub Icon */}
                          <i className="fab fa-github-square text-white text-4xl mx-4"></i>
                          {showModal && (
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                              <div className="bg-white p-4 flex flex-col items-center justify-center relative rounded-lg bg-opacity-10 w-3/4 border-2 border-green-900 backdrop-blur">
                                <img
                                  src={imagesById[id][activeIndex]}
                                  alt={`Activity ${activeIndex + 1}`}
                                  className="object-cover object-center w-3/4 h-3/4" // Limit the width and height of the image
                                />
                                <button
                                  onClick={() => setShowModal(false)}
                                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded z-50" // Add some margin to the top of the button
                                >
                                  Close
                                </button>
                                {/* Buttons for navigation */}
                                <button
                                  className="absolute top-1/2 -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
                                  onClick={prevSlide}
                                >
                                  &#10094;
                                </button>
                                <button
                                  className="absolute top-1/2 -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
                                  onClick={nextSlide}
                                >
                                  &#10095;
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>
                {/* Rest of your UI */}
              </React.Fragment>
            ) : (
              <div>Loading...</div>
            )}
          </div>

          <div className="rounded-lg overflow-hidden col-span-1 row-span-1">
            {/* Activities picture pagination */}
            <h1
              style={{ marginLeft: "5rem" }}
              className="text-2xl font-medium mb-2 text-white"
            >
              Activities
            </h1>
            <div className="p-4 flex flex-col items-center">
              <a
                href={memberDetails.activitiesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-4"
              >
                View Activities
              </a>
              <div className="relative flex items-center justify-center">
                {showModal ? (
                  <div /> // Render an empty div or any placeholder you want
                ) : imagesById[id] && imagesById[id].length > 0 ? (
                  <div
                    style={{ borderColor: "#5CE1E6" }}
                    className={`w-76 h-64 flex items-center justify-center border-4 rounded-lg overflow-hidden p-1 ${
                      isZoomed ? "zoomed" : ""
                    }`}
                  >
                    <img
                      src={imagesById[id][activeIndex]}
                      alt={`Activity ${activeIndex + 1}`}
                      onClick={() => setShowModal(true)}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-64 h-64 flex items-center justify-center border-4 border-red-500 rounded-lg overflow-hidden p-4">
                    <p className="text-white">Images not found for this ID.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MemberDetail;
