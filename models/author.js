const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AuthorSchema = Schema({
  first_name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  family_name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  DOB: Date,
  DOD: Date,
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  return fullname;
});

AuthorSchema.virtual("lifespan").get(function () {
  return Date.now()
});
AuthorSchema.virtual("url").get(function () {
  return `catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
