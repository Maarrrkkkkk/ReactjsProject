import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddMember from "./AddMember";

// Utility class for consistent styling
const consistentDivStyle = "bg-white shadow-lg rounded-lg p-4";

export default function Members() {
  const [memberData, setMemberData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const updateMembers = (newMember) => {
    setMemberData((prevMembers) => [...prevMembers, newMember]);
  };

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch("http://localhost/getMembers.php");
      const data = await response.json();

      // Filter out members with empty fields
      const validMembers = data.filter(
        (member) => member.firstName && member.lastName
      );

      setMemberData(validMembers);
      console.log(validMembers); // Log the valid members
    };

    fetchMembers();
  }, []); // Empty dependency array means the effect will only run once on mount

  const handleSelect = (id) => {
    setSelectedMembers((prevSelectedMembers) => {
      if (prevSelectedMembers.includes(id)) {
        return prevSelectedMembers.filter((memberId) => memberId !== id);
      } else {
        return [...prevSelectedMembers, id];
      }
    });
  };

  const handleDelete = () => {
    selectedMembers.forEach((id) => {
      fetch("http://localhost/deleteMembers.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Member was deleted.") {
            setMemberData((prevMemberData) =>
              prevMemberData.filter((member) => member.id !== id)
            );
          }
        });
    });
    setIsDeleteModalOpen(false);
  };

  const renderMemberLinks = () => {
    const boxWidth = "160px"; // Set a fixed width for the boxes
    const boxHeight = "155px"; // Set a fixed height for the boxes

    const sortedMemberData = [...memberData].sort((a, b) => {
      const surnameA = a.lastName.toLowerCase();
      const surnameB = b.lastName.toLowerCase();

      if (surnameA < surnameB) {
        return -1;
      }
      if (surnameA > surnameB) {
        return 1;
      }
      return 0;
    });

    const memberLinks = sortedMemberData.map((member, index) => {
      return (
        <div key={index} className="relative">
          <Link to={`/member/${member.id}`}>
            <div className="flex flex-col items-center cursor-pointer transform transition duration-500 ease-in-out hover:scale-105">
              <div
                style={{ width: boxWidth, height: boxHeight }}
                className={`${consistentDivStyle} border-2 bg-black overflow-hidden`}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-24 h-24 rounded-full mb-2"
                    src={member.imageUrl}
                    alt={`Member ${member.id}`}
                  />
                  <p className="text-sm text-gray-500 text-center overflow-hidden whitespace-nowrap">
                    <strong>{member.firstName + " " + member.lastName}</strong>
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {isDeleteModalOpen && (
            <input
              type="checkbox"
              className="absolute top-0 right-0 m-2 block w-5 h-5"
              onChange={() => handleSelect(member.id)}
            />
          )}
        </div>
      );
    });

    return memberLinks;
  };

  return (
    <div className="min-h-screen pb-20 flex items-center justify-center">
      <div className="overflow-hidden w-full max-w-screen-lg px-4">
        <div className="squircle bg-gray-200 p-8 rounded-xl relative">
          <div className="flex justify-end mb-4">
            <div className="mr-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsModalOpen(true)}
              >
                Add Member
              </button>
            </div>
            <div className="mr-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setIsEditing(true);
                  setIsModalOpen(true);
                }}
              >
                Edit Member
              </button>
            </div>
            {isModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <AddMember
                        isEditing={isEditing}
                        closeModal={() => {
                          setIsModalOpen(false);
                          setIsEditing(false); // Reset the editing state when closing the modal
                        }}
                        updateMembers={updateMembers}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m1-4"
              onClick={() => {
                if (isDeleteModalOpen) {
                  handleDelete();
                } else {
                  setIsDeleteModalOpen(true);
                }
              }}
            >
              {isDeleteModalOpen ? "Confirm Delete" : "Delete Member"}
            </button>
          </div>
          {isModalOpen && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <AddMember
                      closeModal={() => {
                        setIsModalOpen(false);
                      }}
                      updateMembers={updateMembers}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {renderMemberLinks()}
          </div>
          {/* Other content */}
        </div>
      </div>
    </div>
  );
}
