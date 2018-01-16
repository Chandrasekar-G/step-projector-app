var dbService= require("../services/dbService");

 exports.getAllMovies = function(req, res, next) {
   // Get the documents collection
   var db=dbService.database;
   var moviesCollection = db.collection("movies");
   moviesCollection.find().toArray().then(result=>{
           res.json({
             isSuccess: true,
             data: result
           });
   }).catch(err=>{
     console.log(err);
     res.json({
       isSuccess: false
     });
   });
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
