const { Router } = require("express");
const constrollers = require("../controllers");

const createRouter = Router();
const middlewares = require("../middlewares");
createRouter.post(
  "/",
  middlewares.characterValidation,
  constrollers.createCharacter
);

module.exports = createRouter;
