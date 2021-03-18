const { default: slugify } = require('slugify');
const Service = require('../models/services');

exports.createService = (req, res) => {
  const { name, price, time, description, servicePicture } = req.body;
  const service = new Service({
    name,
    slug: slugify(name),
    price,
    time,
    description,
    servicePicture,
  });
  service.save((error, service) => {
    if (error) res.status(400).json({ error });
    if (service) res.status(201).json({ service });
  });
};

exports.getAllService = (req, res) => {
  Service.find({}).exec((error, service) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (service) {
      return res.status(200).json({ service });
    }
  });
};
exports.getAllServiceByParam = (req, res) => {
  const { id } = req.params;
  Service.findOne({ _id: id }).exec((error, service) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (service) {
      return res.status(200).json({ service });
    }
  });
};

exports.updateService = async (req, res) => {
  const { name, price, time, description, servicePicture, _id } = req.body;
  const service = {
    name,
    price,
    time,
    description,
    servicePicture,
  };
  const updatedService = await Service.findOneAndUpdate(
    { _id: req.params.id },
    service,
    {
      new: true,
    }
  );
  return res.status(201).json({ updatedService });
};

exports.deleteService = async (req, res) => {
  const deletedService = await Service.deleteOne({ _id: req.params.id });
  return res.status(201).json({ deletedService });
};
