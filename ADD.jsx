import React from "react";
import { doc, setDoc} from "firebase/firestore";
import { db } from "./firebase";

function Add() {
  const [addData, setAddData] = React.useState({
    name: "",
    roll: "",
    course: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value.toUpperCase().replace(/\//g, "-"),
    }));
  };
console.log(addData);
  //add data___________________________________________
  const handleAddData = async (e) => {
    e.preventDefault();
    console.log(addData.roll);
    await setDoc(doc(db, "students", addData.roll), {
      course: addData.course,
      name: addData.name,
      roll: addData.roll,
    });
    alert("Data successfully Inserted");
  };


  return (
    <div>
      <form method="POST">
        <p>Add User Data Form </p>
        <div>
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

        <button onClick={handleAddData}>Add Data</button>
      </form>
    </div>
  );
}

export default Add;
