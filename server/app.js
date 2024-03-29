const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// Initialize the Express application
const app = express();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

app.post("/add", (request, response) => {
  const num1 = request.body.numberOne;
  const num2 = request.body.numberTwo;
  const responseBody = {
    sum: num1 + num2
  };
  response.json(responseBody);
});

app.get("/yelp", async (request, response) => {
  const params = request.query;

  console.log("yelpTest - params:", params);

  const options = {
    method: "GET",
    url: "https://api.yelp.com/v3/businesses/search",
    params: {
      location: params.location,
      attributes: params.attributes,
      term: params.term
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    }
  };

  await axios
    .request(options)
    .then(function(yelpResponse) {
      console.log("yelpTest - data:", yelpResponse.data);
      response.json(yelpResponse.data.businesses);
    })
    .catch(function(error) {
      console.error(error);
    });
});
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
