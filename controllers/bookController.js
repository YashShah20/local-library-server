const Book = require("../models/book");
const BookInstance = require("../models/bookinstance");
const async = require("async");

exports.book_list = (req, res, next) => {
  Book.find({})
    .sort({ title: 1 })
    .populate("author")
    .populate("genre")
    .exec((err, list_books) => {
      if (err) return next(err);
      res.set("Access-Control-Allow-Origin", "*");
      res.json({ list_books });
    });
};

exports.book_detail = (req, res, next) => {
  async.parallel(
    {
      book(callback) {
        Book.findById(req.params.id).populate('author').populate('genre').exec(callback);
      },
      prints(callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) return next(err);

      res.set("Access-Control-Allow-Origin", "*");
      res.json({ results });
    }
  );
};

exports.book_create_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Create GET`);
};

exports.book_create_post = (req, res, next) => {
  Book.findOne({ title: req.body.title }).exec((err, result) => {
    if (err) return next(err);
    if (result) {
      res.redirect(result.url);
    } else {
      const book = new Book(req.body);
      book.save((err) => {
        if (err) {
          res.json({ error: "Book can not be created..." });
        }

        res.redirect(book.url);
      });
    }
  });
};

exports.book_delete_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Delete GET`);
};

exports.book_delete_post = (req, res) => {
  Book.deleteOne({ _id: req.params.id }).exec((err, result) => {
    if (err) {
      res.json({ error: "Book not deleted" });
    }
    res.send("deleted")
    // res.redirect("/catalog/books");
  });
};

exports.book_update_get = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Update GET`);
};

exports.book_update_post = (req, res) => {
  res.send(`NOT IMPLEMENTED : Book Update POST`);
};
