var movies = require("./movieData");

 exports.getAllMovies = function(req, res, next) {
   return res.json(movies);
 };

 exports.addNewMovie = function(req, res, next) {
      var movie = req.body;
      console.log(movie);
      return res.json({
          isSuccess: true,
      });
  };

  exports.getMovieDetails = function(req, res, next) {
      console.log(req.params.movieName);
      return res.json({
          isSuccess: true,
      });
  };
