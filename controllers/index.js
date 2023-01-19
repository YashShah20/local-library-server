const Book = require("../models/book");
const BookInstance = require("../models/bookinstance");
const Author = require("../models/author");
const Genre = require("../models/genre");

const async = require("async");

exports.index = (req, res) => {
  async.parallel(
    {
      book_count(callback) {
        Book.countDocuments({}, callback);
      },
      bookinstance_count(callback) {
        BookInstance.countDocuments({}, callback);
      },
      author_count(callback) {
        Author.countDocuments({}, callback);
      },
      genre_count(callback) {
        Genre.countDocuments({}, callback);
      },
    },
    (error, results) => {
      res.cookie("page", "home");
      res.json({ results });
    }
  );
};
