import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";

import NewMenuList from "./NewMenuList";

//WORKING 1/22/24 6:30PM
//DO NOT CHANGE
//DO NOT CHANGE
//DO NOT CHANGE

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  //edit1 adding allItems
  const [allItems, setAllItems] = useState([]);



const addSnack = (newSnack) => {
  //edit1 removed setSnacks to add below:
  const updatedSnacks = [...snacks, newSnack];
  setSnacks(updatedSnacks);
  setAllItems([...updatedSnacks, ...drinks]);
 // setSnacks([...snacks, newSnack]);

  };
  //edit1 removed setDrinks and replaced with below
const addDrink = (newDrink) => {
  const updatedDrinks = [...drinks, newDrink];
  setDrinks(updatedDrinks);
  setAllItems([...snacks, ...updatedDrinks]); // Update all items state
};
 
  //setDrinks([...drinks, newDrink]);





  useEffect(() => {
    async function getItems() {
     try {
      const snacksData = await SnackOrBoozeApi.getSnacks();
      const drinksData = await SnackOrBoozeApi.getDrinks();
     
      setSnacks(snacksData);
      setDrinks(drinksData);
    
      console.log(snacksData);
      console.log(drinksData);
     
      setIsLoading(false);
     } catch (error) {
      console.error("Error getting data:", error);
     }
    }
    getItems();

  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

 //edit1 added allItems to  "/addmenuitem">
   return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu items={snacks} title="Snacks" itemType="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
     
 <Route exact path="/drinks">
            <FoodMenu items={drinks} title="Drinks" itemType="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
   
<Route path="/addmenuitem">
      <NewMenuList addSnack={addSnack} addDrink={addDrink} allItems={allItems} setAllItems={setAllItems} />

</Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
