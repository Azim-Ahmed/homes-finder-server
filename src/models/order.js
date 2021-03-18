const mongoose = require('mongoose');
//creating Orders Schema
const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    time: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    workTime: {
      type: String,
      required: true,
      trim: true,
    },
    workDate: {
      type: String,
      required: true,
      trim: true,
    },
    orderDescription: {
      type: String,
      required: true,
      trim: true,
    },
    orderPicture: {
      type: String,
      required: true,
    },
    orderPrice: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    street: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
