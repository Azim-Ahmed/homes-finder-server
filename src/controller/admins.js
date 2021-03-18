const { default: slugify } = require('slugify');
const AdminEmail = require('../models/admins');

exports.createNewAdmin = (req, res) => {
  const { email } = req.body;
  const adminEmails = new AdminEmail({
    email,
    slug: slugify(email),
  });
  adminEmails.save((error, email) => {
    if (error) res.status(400).json({ error });
    if (email) res.status(201).json({ email });
  });
};

exports.getAllAdminEmail = (req, res) => {
  AdminEmail.find({}).exec((error, email) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (email) {
      return res.status(200).json({ email });
    }
  });
};

exports.deleteAdminEmail = async (req, res) => {
  const deletedadminEmail = await AdminEmail.deleteOne({ _id: req.params.id });
  return res.status(201).json({ deletedadminEmail });
};
