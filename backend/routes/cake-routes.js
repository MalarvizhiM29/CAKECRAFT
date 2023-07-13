const express = require("express");
const router = express.Router();
const Cake = require("../flavor/cake");
const cakesController = require("../controllers/cakes-controller");

router.get("/get", cakesController.getAllcakes);
router.post("/create", cakesController.addcake);
router.get("/:id", cakesController.getById);
router.put("/:id", cakesController.updateCake);
router.delete("/:id", cakesController.deletecake);

module.exports = router;
