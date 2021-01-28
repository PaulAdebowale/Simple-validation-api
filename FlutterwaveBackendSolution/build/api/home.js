"use strict";
//This is the default JSON messages that will be displayed on the screen when the static site is being runned.
var home = function home(req, res) {
  res.json({
    message: "My Rule-Validation API",
    status: "success",
    data: {
      name: "Paul Ademola Adebowale",
      github: "@PaulAdebowale",
      email: "paulpaul6679@gmail.com",
      mobile: "09018379918",
      twitter: "@__PaulAdemola",
    },
    
  rule: {
    field: "missions",
    condition: "gte",
    condition_value: "30"
  }
  });
};
//This exports the entire module and makes it resuable in other parts of the code
module.exports = {
  home: home
};