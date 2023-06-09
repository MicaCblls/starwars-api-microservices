const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello World"));

router.use("/planets", require("./planetsRouter"));
router.use("/planets", require("./createPlanet"));

module.exports = router;
