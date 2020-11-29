const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { getUserToken, requireAuth } = require("../auth");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../utils");
const { User } = require("../db/models");


User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
};

const validateUserNameAndPassword = [
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid User Name"),
  check("hashedPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid Password"),
];

const validateSignUpPassword = (password) => {
  let capitalResult = false;
  let numResult = false;
  let symbolResult = false;
  let length = password.length;
  const letters = password.split('');
  var regex = /\d/g;
  const hasNumber = (myString) => {
    return regex.test(myString);
  }
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let capitalLetter = letter.toUpperCase();
    if (letter === capitalLetter) {
      capitalResult = true;
    }
    if (hasNumber(letter) === true) {
      numResult = true;
    }
    if (letter.indexOf('!', '@', '#', '$', '%', '&', '*', ',', '.', '?', '+', '=', ';', ':') > -1) {
      symbolResult = true;
    }
  }

  if (capitalResult === false || numResult === false) {
    return false;
  }
  if (length < 7) {
    return false;
  }
  return true;
}

const validateSignUpUserName = async (userName) => {
  const user = await User.findOne({
    where: {
      userName,
    },
  });
  // console.log(user);
  if (user) {
    return false;
  }
  return true
}

const passwordVali = function (password, user) {
  const result = user.validatePassword(password);
  // console.log(result);
  return result;
};

// Sign up
router.post(
  "/",
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {

    const { userName, firstName, email, password, confirmedPassword } = req.body;

    const passwordResult = validateSignUpPassword(password);
    const userNameResult = validateSignUpUserName(userName);
    // console.log(userNameResult);

    if (email === '' && userName === '' && firstName === '' && passwordResult === false) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out all required fields";
      err.confirm = false;
      return next(err);
    }
    if (firstName === '' && userName === '') {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out First Name and Username fields";
      err.confirm = false;
      return next(err);
    }
    if (firstName === '' && email === '') {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out First Name and Email fields";
      err.confirm = false;
      return next(err);
    }
    if (email === '' && userName === '') {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out Email and Username fields";
      err.confirm = false;
      return next(err);
    }
    if (firstName === '' && passwordResult === false) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out First Name and Password fields";
      err.confirm = false;
      return next(err);
    }
    if (userName === '' && passwordResult === false) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out Username and Password fields";
      err.confirm = false;
      return next(err);
    }
    if (email === '' && passwordResult === false) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out Email and Password fields";
      err.confirm = false;
      return next(err);
    }
    if (firstName === '') {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out First Name field";
      err.confirm = false;
      return next(err);
    }
    if (userName === '') {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out Username field";
      err.confirm = false;
      return next(err);
    }
    if (email === '') {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please fill out Email field";
      err.confirm = false;
      return next(err);
    }
    if (userNameResult === false) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Sorry, that Username already exists";
      err.confirm = false;
      return next(err);
    }
    if (password !== confirmedPassword) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Password and Confirmed Password must match";
      err.confirm = false;
      return next(err);
    }
    if (passwordResult === false) {
      const err = new Error("Sign Up Failed");
      err.status = 401;
      err.title = "Sign Up failed";
      err.errors = "Please follow Password requirements";
      err.confirm = false;
      return next(err);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ userName, firstName, email, hashedPassword });


    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const user = await User.findByPk(id);
  const { userName } = user;
  // console.log(userName);
  res.json({ userName: userName });
}))

router.post(
  "/token",
  validateUserNameAndPassword,
  asyncHandler(async (req, res, next) => {
    // console.log(req.body);
    const { userName, password } = req.body;
    // console.log(userName);
    // debugger;
    const user = await User.findOne({
      where: {
        userName,
      },
    });
    // console.log(user);
    // debugger;

    if (user === null || user === '') {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = "The provided Username does not exist";
      err.user = false;
      return next(err);
    } else {
      const valiPass = passwordVali(password, user);
      // console.log(valiPass);
      if (valiPass === false) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = "The provided Password is invalid";
        err.password = false;
        return next(err);
      }
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id } });
  })
);

module.exports = router;