import React, { useState } from "react";

function AddMember({ closeModal, updateMembers }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [activitiesLink, setActivitiesLink] = useState("");
  const [about, setAbout] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !imageUrl || !activitiesLink || !about) {
      setMessage("All fields are required!");
      return;
    }

    if (about.trim() === "") {
      setAboutError("About Me is required");
      return;
    }

    fetch("http://localhost/addMembers.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,
        activitiesLink: activitiesLink,
        about: about,
      }),
    })
      .then((response) => response.json())
      .then((newMember) => {
        setMessage("Member added successfully!");
        setFirstName("");
        setLastName("");
        setImageUrl("");
        setActivitiesLink("");
        setAbout("");
        
        updateMembers(newMember);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="p-6">
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageUrl"
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="activitiesLink"
          >
            Activities Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="activitiesLink"
            type="text"
            placeholder="Activities Link"
            value={activitiesLink}
            onChange={(e) => setActivitiesLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="about"
          >
            About Me
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="about"
            placeholder="About Me"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
              setAboutError("");
            }}
          />
          {aboutError && <p className="text-red-500">{aboutError}</p>}{" "}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
        {message && <p className="text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default AddMember;
