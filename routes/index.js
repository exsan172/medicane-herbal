const express = require('express');
const router = express.Router();
const serviceControllers = require("../controllers/service.controllers")

router.get('/sick', [
  serviceControllers.getSick
]);

router.get('/sick/:id', [
  serviceControllers.getSickDetail
]);

router.get('/ingredient/:id', [
  serviceControllers.getIngredient
]);

module.exports = router;
