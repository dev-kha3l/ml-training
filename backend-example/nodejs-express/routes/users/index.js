const express = require("express");
const router = express.Router();
const AsyncHandler = require("express-async-handler");

const UsersController = require("../../controllers/users");

router.get("/", AsyncHandler(UsersController.getUsers));
router.get("/:id", AsyncHandler(UsersController.getUser));
router.post("/", AsyncHandler(UsersController.create));
router.put("/:id", AsyncHandler(UsersController.update));
router.delete("/:id", AsyncHandler(UsersController.delete));

module.exports = router;
