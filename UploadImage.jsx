import React from "react";
import{ ref,uploadBytes,getDownloadURL } from 'firebase/storage';
import { storage } from "./firebase";

export default function UploadImage() {
  
  const [file,setFile]=React.useState(null);
 const [picUrl,setPicUrl]=React.useState("");
  const handleChangeFile = (e) => {
     e.preventDefault();
    setFile(e.target.files[0]);
  };
  
  // picture upload function start here_____________________

  const handlePicture =async (e) => {
    e.preventDefault();
    const storageRef =  ref(storage,`images/${file.name}`);
    await uploadBytes(storageRef,file).then(
      (snapshot) => {
        // Progress tracking goes here
        console.log("ref",storageRef);
        alert("Picture uploaded Successfully");
      },
      (error) => {
        console.error(error);
      },

    );
      await downloadUrl();
  };

  const downloadUrl= async () => {
      const picRef = await getDownloadURL(ref(storage, `images/${file.name}`));
  console.log(picRef);
    setPicUrl(picRef); 

      }

  return (
    <div>
      <form method="POST">
        <p>User Image Uploading Form </p>
        <img src={picUrl} height="200px" width="200px" alt="image will appear here after uploading"/>
        <div>
          <label htmlFor="pic">Select Image : </label>
          <input
            type="file"
            name="pic"
            id="pic"
            onChange={handleChangeFile}
            required
          />
        </div>
        <br />

        <button onClick={handlePicture}>Upload Image</button>
      </form>
    </div>
  );
}
