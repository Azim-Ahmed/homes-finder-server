const express = require('express');
//controllers
const {
  createNewAdmin,
  getAllAdminEmail,
  deleteAdminEmail,
} = require('../controller/admins');
const router = express.Router();
//routers
router.post('/admin/create', createNewAdmin);
router.delete('/admin/delete/:id', deleteAdminEmail);
router.get('/admin/getAllAdmins', getAllAdminEmail);

module.exports = router;
