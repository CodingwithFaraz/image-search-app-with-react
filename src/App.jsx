import { Button } from "bootstrap";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");

  const [result, setResult] = useState([]);

  let API_KEY = "hFIWHwEHZQkARwgEyLn1XZDdTupWu3xt2hWNiQ1AbnM"

  const searchPhoto = async() => {
    const get = await fetch(`https://api.unsplash.com/search/photos?page=2&query=${search}&client_id=${API_KEY}`)

    const jsonData = await get.json()
    // console.log(jsonData.results);
    setResult(jsonData.results)
      
  };
  
  return (
    <>
      <div className="container">
        <h1 className="text-center">Image Search App with React</h1>
        <input
          type="text"
          placeholder="Search Images....."
          className="form-control my-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={searchPhoto}
          className="btn btn-warning btn-sm text-white py-2 px-2"
        >
          Search
        </button>
      </div>
      <div className="container py-3">
        <div className="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div className="col-lg-3 col-md-4 col-6">
                <img src={value.urls.full} className="img-fluid"/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
