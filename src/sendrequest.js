const request = require("request");
module.exports = {
  /*
     This function takes a url as parameters and send a rest request 
     @param {string} url
     @return {void} 
    */
  sendRequest: function(url) {
    request(url, function(err, response, body) {
      if (err) {
        console.log("error:", error);
      } else {
        const weather = JSON.parse(body);
        const weatherObj = {
          City: weather.city.name,
          temperature: weather.list[0].main.temp,
          time: weather.list[0].dt_txt,
          description: weather.list[0].weather[0].description
        };
        console.log("\n", weatherObj);
      }
    });
  }
};
