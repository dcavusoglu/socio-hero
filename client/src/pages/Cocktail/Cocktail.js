import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import shareBtn from "../../assets/share.svg";
import heart from "../../assets/heart.svg";
import drinkImage from "../../assets/drink.jpeg";
import { UserContext } from "../../App";

import { collection, addDoc } from "firebase/firestore";
import {db} from '../../Firebase'



const Cocktail = () => {
  const { id } = useParams();

  const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php";
  const ingredientUrl = "https://www.thecocktaildb.com/images/ingredients/";

  const { currentUser, userName, cocktail, setCocktail } = useContext(UserContext);

  useEffect(() => {
    axios.get(`${cocktailUrl}?i=${id}`).then((response) => {
      const cocktail = response.data?.drinks[0];
      setCocktail(cocktail);
    });
  }, []);

  const handleFav = async() => {
    console.log(cocktail)
    try {
    const docRef = await addDoc(collection(db, userName ), {
      favoriteId: cocktail.idDrink
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }





  return (
    <div className="lg:mt-12 md:mt-12">
      <div className="flex flex-col items-end mt-2">
        <img
          src={shareBtn}
          alt="share"
          className="w-6 mr-4"
        />
        {currentUser && (
          <img
            src={heart}
            alt="share"
            className="w-6 mr-4"
            onClick={handleFav}
          />
        )}
      </div>
      {cocktail ? (
        <div>
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-around lg:justify-around mt-6">
            <div className="flex flex-col items-start mt-6">
              <h2 className="mb-4 text-lg font-bold">{cocktail.strDrink}</h2>
              <h3 className="mb-4 text-base font-semibold">Ingredients</h3>
              <div className="flex flex-row">
                <span className="mr-1">{cocktail.strMeasure1}</span>
                <p className="text-base">{cocktail.strIngredient1}</p>
              </div>
              <div className="flex flex-row">
                <span className="mr-1">{cocktail.strMeasure2}</span>
                <p className="text-base">{cocktail.strIngredient2}</p>
              </div>
              <div className="flex flex-row">
                <span className="mr-1">{cocktail.strMeasure3}</span>
                <p className="text-base">{cocktail.strIngredient3}</p>
              </div>
              <div className="flex flex-row">
                <span className="mr-1">{cocktail.strMeasure4}</span>
                <p className="text-base">{cocktail.strIngredient4}</p>
              </div>
              <div className="flex flex-row">
                <span className="mr-1">{cocktail.strMeasure5}</span>
                <p className="text-base">{cocktail.strIngredient5}</p>
              </div>
            </div>

            <div className="flex flex-row">
              <img
                src={
                  cocktail.strDrinkThumb ? cocktail.strDrinkThumb : drinkImage
                }
                alt="drink"
                className="w-48 h-48 rounded-xl"
              />
            </div>
          </div>
          <div>
            <p>{cocktail.strInstructions}</p>
          </div>
          <div className="flex flex-row justify-center mt-6">
            {/* ingredientleri mapleyerek yapmak isyediğim aşağıdaki gibi ama boş gösteriyor hata vermiyor
            item ı alamıyor

            */}
            {/* {ingredients?.map((item) => {
              <img
                src={`${ingredientUrl}${item}-Medium.png`}
                alt="bottle"
                className="w-28 h-36 rounded-xl"
              />;
            })} */}

            <img
              src={`${ingredientUrl}${cocktail.strIngredient1}-Medium.png`}
              alt={cocktail.strIngredient1}
              className="w-28 h-36 rounded-xl"
            />
            <img
              src={`${ingredientUrl}${cocktail.strIngredient2}-Medium.png`}
              alt={cocktail.strIngredient2}
              className="w-28 h-36 rounded-xl"
            />
            {cocktail.strIngredient3 ? (
              <img
                src={`${ingredientUrl}${cocktail.strIngredient3}-Medium.png`}
                alt={cocktail.strIngredient3}
                className="w-28 h-36 rounded-xl"
              />
            ) : (
              ""
            )}
            {cocktail.strIngredient4 ? (
              <img
                src={`${ingredientUrl}${cocktail.strIngredient4}-Medium.png`}
                alt={cocktail.strIngredient4}
                className="w-28 h-36 rounded-xl"
              />
            ) : (
              ""
            )}
            {cocktail.strIngredient5 ? (
              <img
                src={`${ingredientUrl}${cocktail.strIngredient5}-Medium.png`}
                alt={cocktail.strIngredient5}
                className="w-28 h-36 rounded-xl"
              />
            ) : (
              ""
            )}
            {/* <img src={bottleImage} alt='bottle' className='w-28 h-36 rounded-xl'/>
          <img src={bottleImage} alt='bottle' className='w-28 h-36 rounded-xl'/> */}
          </div>
        </div>
      ) : (
        <h1> Upss smething went wrong!</h1>
      )}
    </div>
  );
};

export default Cocktail;
