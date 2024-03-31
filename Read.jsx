import React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import {db} from './firebase';

export default function Read(){

  const handleAddData = async (e) => {
    e.preventDefault();
    const Roll = document.getElementById("roll").value;
    console.log(Roll);
    await getDoc(doc(db, "students", Roll))
      .then(() => {
        
        alert("Data Deleted successfully");
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };
  
  return(
      <div>
        <form method="POST">
          <p>User Data Read Form </p>
          <div>
            <label htmlFor="roll">Roll No : </label>
            <input
              type="text"
              name="roll"
              id="roll"
              onChange={(e) => {
                e.target.value;
              }}
              required
            />
          </div>
          <br />

          <button onClick={handleAddData}>Read Data</button>
        </form>
      </div>
  )
}
