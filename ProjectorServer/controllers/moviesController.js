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
      var db=dbService.database;
      console.log(movie);
      var moviesCollection = db.collection("movies");

      moviesCollection.insert(movie).then(save_data=>{
        return res.json({
          isSuccess: true,
          data: save_data
        });
      }).catch(err=>{
        return res.json({
          isSuccess: false
        });
      });

  };

  exports.getMovieDetails = function(req, res, next) {
      console.log(req.params.movieName);
      var db=dbService.database;
      var moviesCollection = db.collection("movies");
      moviesCollection.find({ name: req.params.movieName }).toArray().then(result=>{
              res.json({
                isSuccess: true,
                data: result
              });
      }).catch(err=>{
        console.log(err);
        res.json({
          isSuccess: false
        });
      })
  };
