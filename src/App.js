import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  // const application_ID = "04f6090b"
  // const API_key = "60ea4ac886e8b3151356975a1a032630	"
  const API_call = "https://api.edamam.com/api/recipes/v2?type=public&app_id=04f6090b&app_key=60ea4ac886e8b3151356975a1a032630"

  useEffect( () => {
    console.log("effect has been run");
  });
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
        <h1>React App</h1>
        <form className="recipeSearchForm">
          <input type='text' className="searchBar">
          </input>
          <button onClick={() => setCounter(counter + 1)}type="submit" className="searchFormBtn">{counter}</button>
        </form>
    </div>
  );
}

export default App;
