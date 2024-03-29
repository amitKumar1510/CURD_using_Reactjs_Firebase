import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function Update() {
  const [updateData, setUpdateData] = React.useState({
    name: "",
    roll: "",
    course: "",
  });
  
  // handle change function ___________________
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value.toUpperCase().replace(/\//g, "-"),
    }));
  };
  //console.log(updateData);

  
  //Update data function ___________________________________________
  const handleUpdateData = async (e) => {
    e.preventDefault();
    //console.log(updateData.roll);
    await updateDoc(doc(db, "students", updateData.roll), {
      course: updateData.course,
      name: updateData.name,
      roll: updateData.roll,
    });
    alert("Data Updated successfully!");
  };

  return (
    <div>
      <form method="POST">
        <div>
          <p>Update Data Form </p>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="course">Course : </label>
          <input
            type="text"
            name="course"
            id="course"
            maxLength={6}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="roll">Roll No : </label>
          <input
            type="text"
            name="roll"
            id="roll"
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <button onClick={handleUpdateData}>Update Data</button>
      </form>
    </div>
  );
}

export default Update;
