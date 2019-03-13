const weather = require("./src/weather");

//setting zip code and location here
const params = [
  { city: "Mountain View", zip: "94040" },
  { city: "Portland", zip: "97035" }
];

params.forEach(function(arrayItem) {
  weather.getDetails(arrayItem);
});
