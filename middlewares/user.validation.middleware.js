import { USER } from "../models/user.js";

const REG_EMAIL = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;
const REG_PHONENUMBER = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/
const REG_PASSWORD = /\d*(?:[0-9a-zA-Z$&%?#/@!*+-]){3,}\d*/

const createUserValid = (req, res, next) => {
  const middlUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
  }

  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phoneNumber || !req.body.password) {
    res.status(400).send("User validation failed. Some field is empty")
  } else {
    if (JSON.stringify(middlUser) == JSON.stringify(req.body)) {
      if (REG_EMAIL.test(req.body.email)) {
        if (REG_PHONENUMBER.test(req.body.phoneNumber)) {
          if (REG_PASSWORD.test(req.body.password)) {
            next()
          } else {
            res.status(400).send( { message: 'Password less than 3 characters' })
          }
        } else {
            res.status(400).send( { message: 'The expected format is like ###-###-####' } )
        }
      } else {
          res.status(400).send("email must be only gmail")
      }
    } else {
      res.status(400).send("added extra fields")
    }
  }
  // TODO: Implement validatior for USER entity during creation
};

const updateUserValid = (req, res, next) => {
  if (req.body.firstName || req.body.lastName || req.body.email || req.body.phoneNumber || req.body.password) {
    next();
  } else {
    res.status(400).send( { message: 'When updating data, there must be at least one user' } )
  }
  // TODO: Implement validatior for user entity during update
};

export { createUserValid, updateUserValid };
