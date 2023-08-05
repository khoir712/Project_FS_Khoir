const express = require("express");
const router = express.Router();
const AbsenceController = require("../controllers/AbsenceController");

router.get("/", AbsenceController.getAllAbsence);
router.post("/create", AbsenceController.create);
router.put("/update/:id", AbsenceController.update);
router.delete("/delete/:id", AbsenceController.delete);

module.exports = router;
