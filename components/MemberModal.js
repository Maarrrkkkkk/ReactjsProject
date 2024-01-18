import React from "react";

const MemberModal = ({ member, closeModal, openEditForm }) => {
  // implement the modal here
  return (
    <div>
      {/* display member data */}
      <button onClick={closeModal}>Close</button>
      <button onClick={openEditForm}>Edit</button>
    </div>
  );
};

export default MemberModal;
