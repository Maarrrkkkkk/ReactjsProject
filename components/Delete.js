import React, { useState } from "react";

const DeleteModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="px-4 py-2 text-white bg-red-500 rounded"
      >
        Delete
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Are you sure to remove this member?
            </h3>

            <div className="mt-2">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-white bg-green-500 rounded"
              >
                Yes
              </button>

              <button
                type="button"
                onClick={handleCloseModal}
                className="ml-4 px-4 py-2 text-white bg-red-500 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
