const mongoose = require('mongoose');
//creating email schema for admin
const AdminEmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    updatedAt: Date,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('AdminEmail', AdminEmailSchema);
