const BookInstance = require("../models/bookinstance");

exports.bookinstance_list = (req, res, next) => {
  BookInstance.find({})
    .populate("book")
    .exec((err, results) => {
      if (err) return next(err);
      res.json({ results });
    });
};

exports.bookinstance_detail = (req, res) => {
  BookInstance.findById(req.params.id)
    .populate("book")
    .exec((err, results) => {
      if (err) return next(err);
      res.json({ book_instance: results });
    });
};

exports.bookinstance_create_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Instance Create GET`);
};

exports.bookinstance_create_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Instance Create POST`);
};

exports.bookinstance_delete_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Instance Delete GET`);
};

exports.bookinstance_delete_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Instance Delete POST`);
};

exports.bookinstance_update_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Instance Update GET`);
};

exports.bookinstance_update_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Instance Update POST`);
};
