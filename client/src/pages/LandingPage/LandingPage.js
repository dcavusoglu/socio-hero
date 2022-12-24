import React, { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState();
  const baseUrl = "http://localhost:5050/cocks";
  const randomDrinks = drinks.length;

  useEffect(() => {
    getDrinks();
  }, [search]);

  const getDrinks = async () => {
    axios.get(baseUrl).then((response) =>
      // console.log('response:', response.data.drinks)
      setDrinks(response.data.drinks)
    );
  };

  // şuan sadece random ile biten api linki kullandığımız için aşağıdakileri commentledim. Sonra list olanı ekleriz diye düşündüm.
  // önce bi bunu çalıştırdım

  // useEffect(() => {
  //   if (drinks.length) showRandom();
  // }, [drinks]);

  // function showRandom() {
  //   const items = [];

  //   for (var i = 0; i < 3; i++) {
  //     const item = drinks[Math.floor(Math.random() * randomDrinks)];
  //     // console.log(item);
  //     if (items.includes(item)) {
  //       showRandom();
  //       break;
  //     } else {
  //       items.push(item);
  //     }
  //     setResults(items);
  //   }
  //console.log(items);
  // }

  // console.log(results);

  //console.log(data.drinks[0].strDrink);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDrinks();
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
      {results ? (
        <div>
          <p>{results.length}</p>
        </div>
      ) : (
        <div className="searchResults">
          {drinks.map((drink) => {
            return (
              <div key={drink.idDrink}>
                <h2 className="text-base font-bold text-cyan-700">
                  {drink.strDrink}
                </h2>
                <h2>Type: {drink.strCategory}</h2>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-40 h-40"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
