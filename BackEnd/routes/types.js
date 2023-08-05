const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/TypeController");

router.get("/", TypeController.getAllTypes);
router.post("/create", TypeController.create);
router.put("/update/:id", TypeController.update);
router.delete("/delete/:id", TypeController.delete);

module.exports = router;
