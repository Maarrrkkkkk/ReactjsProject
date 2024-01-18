import React, { useEffect, useState } from "react";

function DeleteMembers() {
  const [memberData, setMemberData] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/getMembers.php")
      .then((response) => response.json())
      .then((data) => setMemberData(data));
  }, []);

  const handleSelect = (id) => {
    setSelectedMembers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((memberId) => memberId !== id)
        : [...prevSelected, id]
    );
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
          setMemberData(memberData.filter((member) => member.id !== id));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
    setSelectedMembers([]);
  };

  return (
    <div>
      {memberData.map((member) => (
        <div key={member.id}>
          <input
            type="checkbox"
            checked={selectedMembers.includes(member.id)}
            onChange={() => handleSelect(member.id)}
          />
          <p>
            {member.firstName} {member.lastName}
          </p>
        </div>
      ))}
      <button onClick={handleDelete}>Delete Selected</button>
    </div>
  );
}

export default DeleteMembers;
