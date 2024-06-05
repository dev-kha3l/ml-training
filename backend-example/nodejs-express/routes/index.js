const express = require("express");
const router = express.Router();

const UserRoutes = require("./users");

router.use("/users", UserRoutes);

module.exports = router;
