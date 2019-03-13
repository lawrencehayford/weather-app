const config = require("../config");
const validate = require("../utils/validate");
const request = require("./sendrequest");
module.exports = {
  /*
     This function takes an  object as parameters and returns the temperature 
     and time of that area
     @param {object} param
     @return {void} 
    */
  getDetails: function(params) {
    //validating params before sending
    let isValidated = validate(params);
    if (isValidated) {
      //getting params and building url
      const city = params.city;
      const zip = params.zip;
      const url = `${config.baseUrl}q=${city}&zip=${zip}&mode=${
        config.mode
      }&units=${config.units}&appid=${config.key}`;

      //sending api request
      request.sendRequest(url);
    }
  }
};
