import React, { useState } from "react";
import "./Cakeform.css";
function Cakeform(props) {
  const { addCake } = props;
  //   const [headingText, setHeadingText] = useState("Add Products");
  // const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [weight, setweight] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleweightChange = (e) => {
    setweight(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      image,
      name,
      weight,
      price,
    };
    addCake(data);
    setName("");
    setImage("");
    setweight("");
    setPrice("");
  };
  return (
    <div className="container">
      <h2>Add Cake</h2>
      <form>
        <input
          type="text"
          placeholder="Cake Name"
          onChange={handleNameChange}
          required
        />
        <input
          type="text"
          placeholder="Weight in weight"
          onChange={handleweightChange}
          required
        />
        <input
          type="text"
          placeholder="Price"
          onChange={handlePriceChange}
          required
        />
        <input
          type="text"
          placeholder="Image"
          onChange={handleImageChange}
          required
        />
        <button type="submit" onClick={handleFormSubmit}>
          Add Cake
        </button>
      </form>
    </div>
  );
}

export default Cakeform;
