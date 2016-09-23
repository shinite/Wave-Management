var express=require('express')
var mongoose=require('mongoose')
var waveObj=require('../model/wave');
var app=express();

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



module.exports=app;
