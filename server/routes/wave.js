var express=require('express')
var mongoose=require('mongoose')
var waveObj=require('../model/wave');
var app=express();


var loggerTest=function(req,res,next){
  waveObj.find(function(err,data){
    if(err)
    res.send(err);
    else
    {
      console.log("successfull middleware");
      console.log(data);
      res.send(data);
    }
  });
}


app.post('/add',function(req,res){
  console.log("Inside Add");
  var wave =new waveObj(req.body);
  wave.save(function(err){
    if(err)
    {
      res.send(err);
    }
    else
    {
      console.log('Saved successfully');
      res.send("Wave successful");
    }
  })
});

app.get('/display',function(req,res,next){
  //console.log("inside get");
  //var movie=mongoose.model("MovieDetails")
  waveObj.find({},function(err,data){
    if(err){
      res.send("error in get");
    }
    else {
      console.log("successfully displayed");
      console.log(data);
      res.json(data);
    }
  })
}
);

app.delete('/delete/:wave',function(req,res,next){
  console.log(req.params.wave);
  //var movie=mongoose.model("MovieDetails");
  waveObj.findOneAndRemove({waveName: req.params.wave}, function (err,offer){
    if(err) { res.send(err);

      console.log(err);
     }
    else{
      // console.log("successfully deleted");
      //res.send("successfully deleted");
      next();
    }
  })
});


app.use(loggerTest);

module.exports=app;
