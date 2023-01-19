const Author = require("../models/author");
const Book = require("../models/book");
const async = require("async");

exports.author_list = (req, res, next) => {
  Author.find({}).exec((err, results) => {
    if (err) return next(err);
    res.json({ results });
  });
};

exports.author_detail = (req, res, next) => {
  async.parallel(
    {
      author(callback) {
        Author.findById(req.params.id).exec(callback);
      },
      books(callback) {
        Book.find({ author: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) return next(err);

      res.json({ results });
    }
  );
};

exports.author_create_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Author Create GET`);
};

exports.author_create_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Author Create POST`);
};

exports.author_delete_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Author Delete GET`);
};

exports.author_delete_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Author Delete POST`);
};

exports.author_update_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Author Update GET`);
};

exports.author_update_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Author Update POST`);
};
