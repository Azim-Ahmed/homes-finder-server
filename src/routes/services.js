const express = require('express');
//controllers
const {
  createService,
  getAllService,
  updateService,
  deleteService,
  getAllServiceByParam,
} = require('../controller/services');
const router = express.Router();
//routers
router.post('/service/create', createService);
router.patch('/service/update/:id', updateService);
router.delete('/service/delete/:id', deleteService);
router.get('/services/getAllServices', getAllService);
router.get('/services/getAllServicesbyParams/:id', getAllServiceByParam);

module.exports = router;
