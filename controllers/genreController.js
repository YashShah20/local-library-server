const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");

exports.genre_list = (req, res, next) => {
  Genre.find({}).exec((err, results) => {
    if (err) return next(err);
    
    
    res.json({ results });
  });
};

exports.genre_detail = (req, res, next) => {
 
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback);
      },
      genre_book(callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      res.json({ results });
    }
  );
};

exports.genre_create_get = (req, res) => {
 
  res.send(`NOT IMPLEMENTED : Genre Create GET`);
};

exports.genre_create_post = [
  (req, res, next) => {
    
    Genre.findOne({ name: req.body.name }).exec((err, result) => {
      if (err) return next(err);
      if (result) res.redirect(result.url);
      else {
        const genre = new Genre({ name: req.body.name });
        // console.log("hello i am here");
        genre.save((error) => {
          if (error) {
            // console.log("first");
            res.json({ error });
          }
          res.redirect(genre.url);
        });
      }
    });
  },
];

exports.genre_delete_get = (req, res) => {
 
  res.send(`NOT IMPLEMENTED : Genre Delete GET`);
};

exports.genre_delete_post = (req, res) => {
 
  Genre.deleteMany({ _id: req.params.id }).exec((err, result) => {
    if (err) {
      res.json(err);
    }
    res.json(result);
  });
};

exports.genre_update_get = (req, res) => {
 
  res.send(`NOT IMPLEMENTED : Genre Update GET`);
};

exports.genre_update_post = (req, res) => {
 
  res.send(`NOT IMPLEMENTED : Genre Update POST`);
};
