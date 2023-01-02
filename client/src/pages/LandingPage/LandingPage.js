import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const LandingPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState();
  const baseUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  //const filterUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";
  const [searchOption, setSearchOption] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  //const baseUrl = `http://localhost:5050/${searchOption}`;

  useEffect(() => {
    getDrinks();
  }, [search]);
  useEffect(() => {
    getDrinksWithFilter(search);
  }, [searchOption]);

  // const getDrinks = async () => {
  //   axios.get(baseUrl).then((response) =>
  //     console.log('response:', response.data.drinks)
  //     setDrinks(response.data.drinks)
  //   );
  // };
  const getDrinksWithFilter = async (search) => {
    axios.get(`${searchOption}${search}`).then((response) => {
      // console.log('responseF:', response.data.drinks);
      setDrinks(response?.data?.drinks || []);
    });
  };

  useEffect(() => {
    console.log("SS", search);
    if (!search) {
      getDrinks();
      console.log("get drinks calıstı");
    } else {
      getDrinksWithFilter(search);
      console.log("get drinks with filter calıstı");
    }
  }, [search]);

  const getDrinks = async () => {
    axios.get(baseUrl).then((response) => {
      console.log("responseG:", response.data.drinks);
      setDrinks(response.data.drinks);
    });
  };

  //  console.log(baseUrl);

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
    const searchedWord = e.target.value.toLowerCase();
    setSearch(searchedWord);
    //   const searchResults = drinks.filter(drink => {
    //     return drink.strDrink.toLowerCase().includes(searchedWord)
    //   })
    // setResults(searchedWord);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDrinks();
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
        ></input>

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
        <button
          type="submit"
          className="text-white bg-purple-500 py-1 px-4 rounded-lg mx-4 my-2"
        >
          Cocktail me
        </button>
      </form>
      {drinks ? (
        <div className="flex flex-row flex-wrap justify-center mx-20 ">
          {drinks.map((drink) => {
            return (
              <div
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
              </div>
            );
          })}
        </div>
      ) : (
        <div className="columns-4 mx-20">
          {drinks.map((drink) => {
            return (
              <div
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
