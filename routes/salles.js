const express = require('express');
const Salle = require('../models/Salle');
const router = express.Router();
const salleController = require('../controller/salleController');


router.post("/create", salleController.createSalle);
router.put("/:id", salleController.updateSalle);
router.delete("/:id", salleController.deleteSalle);
router.get("/:id", salleController.getSalleById);
router.get("/", salleController.getAllSalles);

router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
module.exports = router;