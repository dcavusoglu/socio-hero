<<<<<<< HEAD
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const router = require("./routes/routes");

const port = 5050;
app.use(cors());
app.get("/", function (req, res) {
  res.send({ message: "Hello World" });
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// app.get("/", (req, res) => {
//   res.json("hi");
// });

app.get("/convert", (req, res) => {
  const options = {
    method: "GET",
    url: "https://philosophyapi.pythonanywhere.com/api/schools/?page=2",
    headers: {
      // 'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      "Content-Type": "application/json",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.use("/convert", router);
=======
const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios');


const port = 5050;
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req,res) => {    res.json('hi')})


const options = {
    method: 'GET',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000'
    }
  }

const getCocktailsWithPromise = () => {
return axios.request(options)
  .then((response) => {
    console.log("first then : " , response.data);
    return response.data;
  });
}

app.get('/cocks', async (req,res) => {
  const result = await getCocktailsWithPromise();
  console.log("resultCocks : " ,result);
  return res.json(result);
})
>>>>>>> 8b97091a669f8b6890b264d59ec56f023ae32118

app.use("/", router);

const start = () => {
  try {
<<<<<<< HEAD
    app.listen(port, (req, res) => {
      console.log("you are on port", port);
    });
=======
    app.listen(port, (req,res) => {
      console.log('you are on port', port);
    })
>>>>>>> 8b97091a669f8b6890b264d59ec56f023ae32118
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
