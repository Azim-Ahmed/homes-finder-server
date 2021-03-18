const Order = require('../models/order');

exports.createOrder = (req, res) => {
  const {
    name,
    email,
    orderPrice,
    city,
    street,
    time,
    serviceName,
    workTime,
    workDate,
    orderDescription,
    orderPicture,
  } = req.body;
  const order = new Order({
    name,
    email,
    orderPrice,
    city,
    street,
    time,
    serviceName,
    workTime,
    workDate,
    orderDescription,
    orderPicture,
  });
  order.save((error, order) => {
    if (error) res.status(400).json({ error });
    if (order) res.status(201).json({ order });
  });
};

exports.getAllOrder = (req, res) => {
  Order.find({}).exec((error, order) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (order) {
      return res.status(200).json({ order });
    }
  });
};

exports.deleteOrder = async (req, res) => {
  const deletedOrder = await Order.deleteOne({ _id: req.params.id });
  return res.status(201).json({ deletedOrder });
};
