/* eslint-disable space-before-function-paren, func-names */
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { v4 } = require('uuid');
const dataTables = require('mongoose-datatables');

const userSchema = new Schema(
  {
    uuid: { type: String, default: v4 },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.toPublic = function() {
  return {
    uuid: this.uuid,
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

userSchema.methods.toAdmin = function() {
  return {
    uuid: this.uuid,
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

userSchema.plugin(dataTables, {
  formatters: {
    toAdmin: (item) => item.toAdmin(),
    toPublic: (item) => item.toPublic(),
  },
});

module.exports = mongoose.model('User', userSchema);
