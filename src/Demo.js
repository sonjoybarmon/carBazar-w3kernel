import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Contexts/ContextAuth/firebaseConfig";

const Demo = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseConfig.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded a file");
    });
  };
  return (
    <div>
      <input type="file" onChange={onChange} />
    </div>
  );
};

export default Demo;
