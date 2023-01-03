import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const baseUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  const [searchOption, setSearchOption] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );

  const getDrinksWithFilter = async (search) => {
    axios.get(`${searchOption}${search}`).then((response) => {
      setDrinks(response.data.drinks);
    });
  };

  useEffect(() => {
    if (!search) {
      getDrinks();
    } else {
      getDrinksWithFilter(search);
    }
  }, [search, searchOption]);

  const getDrinks = async () => {
    axios.get(baseUrl).then((response) => {
      const items = [];

      for (let i = 0; i < 3; i++) {
        const item = response.data.drinks[Math.floor(Math.random() * 100)];
        items.push(item);
      }
      setDrinks(items);
    });
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

  const handleSearch = (e) => {
    const searchedWord = e.target.value.toLowerCase();
    setSearch(searchedWord);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onOptionChange = (e) => {
    e.target.value === "by_name"
      ? setSearchOption(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        )
      : setSearchOption(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
        );
  };

  return (
    <div className="flex flex-col">
      <form
        className="mb-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="border-2 rounded-lg border-purple-500/[.55] px-2 h-8 mt-4 w-64"
          placeholder="Type here"
        />

        <div>
          <input
            type="radio"
            name="search_option"
            value="by_name"
            id="by_name"
            checked={
              searchOption ===
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
            }
            onChange={onOptionChange}
          />
          <label htmlFor="by_name">Search cocktails</label>

          <input
            type="radio"
            name="search_option"
            value="by_ingredient"
            id="by_ingredient"
            checked={
              searchOption ===
              "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
            }
            onChange={onOptionChange}
          />
          <label htmlFor="by_ingredient">Search by ingredients</label>
        </div>
      </form>
      {drinks ? (
        <div className="flex flex-row flex-wrap justify-center mx-20 ">
          {drinks.map((drink) => {
            return (
              <Link
                to={`/cocktail/${drink.idDrink}`}
                key={drink.idDrink}
                className="m-6 max-w-sm w-44 border border-pink-500/[.25] flex flex-col items-center rounded-b-lg shadow-xl"
              >
                <h2 className="text-sm font-bold text-purple-500 tracking-tight mb-2 h-10 flex items-center">
                  {drink.strDrink}
                </h2>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-44 h-44 rounded-b-lg"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <h1>Nothing</h1>
      )}
    </div>
  );
};

export default LandingPage;
