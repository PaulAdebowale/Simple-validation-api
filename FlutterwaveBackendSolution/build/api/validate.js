"use strict";
//This is where all the validation takes place they where test scenarios such as 'eq','neq','gt','gte' which have a set of rules which has to be put in consideration by the program
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRule = void 0;

var validateRule = function validateRule(req, res) {
 
   var _req$body$rule = req.body.rule,
      field = _req$body$rule.field,
      condition = _req$body$rule.condition,
      condition_value = _req$body$rule.condition_value;
  var data = req.data;
  var result = false;


  try {
    //This is case:'eq' Means the field value should be equal to the condition value
    switch (condition) {
      case 'eq':
        if (data === condition_value) {
          result = true;
        }

        break;

      //Means the field value should not be equal to the condition value
      case 'neq':
        if (data !== condition_value) {
          result = true;
        }

        break;

      //Means the field value should be greater than the condition value
      case 'gt':
        if (Number(data) > Number(condition_value)) {
          result = true;
        }

        break;

      //Means the field value should be greater than or equal to the condition value
      case 'gte':
        if (Number(data) >= Number(condition_value)) {
          result = true;
        }

        break;
      
      //Means the field value should contain the condition value
      case 'contains':
        if (data.includes(condition_value)) {
          result = true;
        }

        break;

      default:
        break;
    }

    if (!result) {
      throw Error();
    }

    //This section handles all the error and the messages
    return res.status(200).send({
      message: "field ".concat(field, " successfully validated."),
      status: 'success',
      data: {
        validation: {
          error: false,
          field: "".concat(field),
          field_value: data,
           field_value: typeof data === "object" ? data : req.body.data,
          condition: condition,
          condition_value: condition_value
        }
      }
    });
  } catch (error) {
    return res.status(400).send({
      message: "field ".concat(field, " failed validation."),
      status: 'error',
      data: {
        validation: {
          error: true,
          field: "".concat(field),
          field_value: data,
          condition: condition,
          condition_value: condition_value
        }
      }
    });
  }
};

exports.validateRule = validateRule;