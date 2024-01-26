//below taken from NewListForm.js in react forms demo...

//no idea why server is here
//import server from "json-server";
import React, { useState } from "react";


const NewMenuItemForm = ({ addItem }) => {
  const INITIAL_STATE = { name: "", description: "", recipe: "", serve: "", itemType: "snacks" };
  const [formData, setFormData] = useState(INITIAL_STATE);



  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem({ ...formData, itemType: "snacks" }); // maybe change to ""?
    setFormData(INITIAL_STATE);
  };


  const handleChange = (evt) => {
    const { name, value }= evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="description">description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="recipe">recipe</label>
      <input
        id="recipe"
        name="recipe"
        value={formData.recipe}
        onChange={handleChange}
      />
        <label htmlFor="serve">serve</label>
        <input 
        id="serve"
        name="serve"
        value={formData.serve}
        onChange={handleChange}
      />
      
  

      <button>Add a new menu item!!</button>
    </form>
  );
};

export default NewMenuItemForm;

//removed this drop down selection as it doesn't work and is redundant
//<label htmlFor="itemType">Item Type:</label>
//<select
//  name="itemType"
//  value={formData.itemType}
//  onChange={handleChange}
//  >
//    <option value="snacks">Snacks</option>
//    <option value="drinks">Drinks</option>
//  </select>