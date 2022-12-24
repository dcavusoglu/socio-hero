import React, { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  // const API_KEY = "6cGZBPSiQzyGuANS9IVyDlpO7PVpViTl";

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState();
  const [cocktail, setCocktail] = useState(null);
  const baseUrl = "http://localhost:5050/convert";

  //console.log("num", randomPhi);

  //   items.filter(item => item.id !== id)
  //   items.push(books[Math.floor(Math.random() * books.length)])

  //   console.log(items);

  // useEffect(() => {
  //   getBooks();
  // }, [search]);

  // const getBooks = async () => {
  //   axios.get(baseUrl).then(
  //     (response) => console.log("response:", response.data)
  //     //  setBooks(response.data.results)
  //   );
  // };

  // useEffect(() => {
  //   fetch(baseUrl).then((res) => res.json().then((data) => console.log(data)));
  // }, []);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        response.json().then((data) => {
          setCocktail(data);
          //console.log(data);
        });
      })
      .catch(function (err) {
        console.log("errors", err);
      });
  }, []);
  useEffect(() => {
    if (cocktail) console.log(cocktail.drinks[0].strDrink);
  }, [cocktail]);

  //console.log(data.drinks[0].strDrink);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // getBooks();
  };

  return (
    <div className="landingPage">
      <form
        className="searchForm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {{ cocktail } && (
        <>
          <h2>Random Cocktail</h2>
          <p>{cocktail.drinks[0]}</p>
        </>
      )}
    </div>
  );
};

export default LandingPage;
