import React, { useState } from "react";
import NewMenuItemForm from "./NewMenuItemForm";
import { v4 as uuid } from "uuid";

//import { useHistory } from "react-router-dom";

//edit1 adding allItems
function NewMenuList({ addSnack, addDrink, allItems, setAllItems }) {
  const [items, setItems] = useState([]);
  const [selectedType, setSelectedType] = useState("snacks");

  const renderItems = () => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.description}: {item.recipe}: {item.serve}
          </li>
        ))}
      </ul>
    );
  };

  const addItem = (item) => {
    let newItem = { ...item, id: uuid() };
    setItems((prevItems) => [...prevItems, newItem]);

    if (selectedType === "snacks") {
      addSnack(newItem);
    } else if (selectedType === "drinks") {
      addDrink(newItem);
    }
    setAllItems([...allItems, newItem]);
  };

const handleTypechange = (e) => {
  setSelectedType(e.target.value);
};

//to fic the drop down, replaced e with handleTypechange and removed allitems from renderitems and added
//handletypechange above
  return (
    <div className="font-weight-bold text-center">
      <NewMenuItemForm addItem={addItem}  selectedType={selectedType} setSelectedType={setSelectedType}/>
      <select
        name="itemType"
        value={selectedType}
        onChange={handleTypechange} 
      >
        <option value="snacks">Snacks</option>
        <option value="drinks">Drinks</option>
      </select>
      {renderItems()}
    </div>
  );
}

export default NewMenuList;


//edit 1 to try to remove the duplicate select drop down
//<div className="font-weight-bold text-center">
//      <NewMenuItemForm addItem={addItem}  selectedType={selectedType} />
//      <select
//        name="itemType"
//        value={selectedType}
//        onChange={(e) => setSelectedType(e.target.value)}
//      >
//        <option value="snacks">Snacks</option>
//        <option value="drinks">Drinks</option>
//      </select>
//      {renderItems()}
//    </div>