const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const port = 5050;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.json("hi");
});

const options = {
  method: "GET",
  url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  headers: {
    "Content-Type": "application/json",
    Origin: "http://localhost:3000",
  },
};

const getCocktailsWithPromise = () => {
  return axios.request(options).then((response) => {
    console.log("first then : ", response.data);
    return response.data;
  });
};

app.get("/cocks", async (req, res) => {
  const result = await getCocktailsWithPromise();
  console.log("resultCocks : ", result);
  return res.json(result);
});

const start = () => {
  try {
    app.listen(port, (req, res) => {
      console.log("you are on port", port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

// Bu kısım yukarıdaki işlemin async ve await ile yapılmış hali - örnek olması için kalsın
// const getCocktails= async () => {
//   try {
//     const randomCocktail = await axios.request(options);
//     console.log(randomCocktail.data);
//     return await randomCocktail.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// app.get('/all', async (req,res) => {
//   const result = await getCocktails();
//   console.log("result : " ,result);
//   return res.json(result);
// })
