const validate = obj => {
  return obj.city != "" && obj.name != "" ? true : false;
};

module.exports = validate;
