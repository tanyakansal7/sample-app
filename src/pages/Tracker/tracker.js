import React from "react";
import { db } from "../../firebase/firebaseConfig";
import "./tracker.css";

const Tracker = () => {
  const saveWeight = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("weightResponse").add(formData);
  };

  return (
    <div className="container">
      <h1>Add Your Weight!</h1>
      <form onSubmit={saveWeight}>
        <input type="number" id="test123" placeholder="Type here..."></input>
        <button>SAVE</button>
      </form>
    </div>
  );
};

export default Tracker;